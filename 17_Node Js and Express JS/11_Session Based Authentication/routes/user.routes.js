import express from "express";
import db from "../db/index.js";
import { usersTable, usersSessions } from "../db/schema.js";
import { eq } from "drizzle-orm";
import { randomBytes, createHmac } from 'node:crypto';
import jwt from "jsonwebtoken";
import { ensureAuthenticated } from "../middlewares/auth.middleware.js"

const router = express.Router();

router.patch('/', ensureAuthenticated, async (req, res) => {
    const user = req.user;

    const { name } = req.body;
    await db.update(usersTable).set({ name }).where(eq(usersTable.id, user.id));

    return res.status(200).json({ status: "success" })
})

router.get("/", ensureAuthenticated, async (req, res) => {
    return res.json({ user })
}) // Return current loggged in user

router.post("/signup", async (req, res) => {

    const { name, email, password } = req.body;

    const [existingUser] = await db
        .select({
            email: usersTable.email
        })
        .from(usersTable)
        .where((table) => eq(table.email, email))

    if (existingUser) {
        return res
            .status(400)
            .json({ error: `user with email ${email} already exists!` });
    }

    const salt = randomBytes(256).toString('hex')
    const hashedPassword = createHmac('sha256', salt).update(password).digest('hex')

    const [user] = await db.insert(usersTable).values({
        name,
        email,
        password: hashedPassword,
        salt
    }).returning({ id: usersTable.id });

    return res.status(200).json({ status: "success", data: { userId: user } });


}) 
router.post("/login", async (req, res) => {

    const { email, password } = req.body;

    const [existingUser] = await db
        .select({
            id: usersTable.id,
            email: usersTable.email,
            name: usersTable.name,
            salt: usersTable.salt,
            role: usersTable.role,
            password: usersTable.password
        })
        .from(usersTable)
        .where(eq(usersTable.email, email))

    if (!existingUser) {
        return res
            .status(404)
            .json({ error: `user with email ${email} doest not exists!` });
    }

    const salt = existingUser.salt;
    const existinghashedPassword = existingUser.password;

    const hashedPassword = createHmac('sha256', salt).update(password).digest('hex');

    if (existinghashedPassword !== hashedPassword) {
        return res.status(400).json({ error: "Incorrect Password" });
    }

    const payload = {
        id: existingUser.id,
        email: existingUser.email,
        name: existingUser.name,
        role: existingUser.role,
    }

    const token = jwt.sign(payload, process.env.JWT_SECRET)
    return res. json({ status: "success", token })
})

export default router;