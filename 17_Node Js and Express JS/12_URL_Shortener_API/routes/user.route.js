import express from 'express';
import { db } from '../db/index.js'
import { usersTable } from '../models/user.model.js'
import { signupPostRequestBodySchema, loginPostRequestBodySchema } from '../validation/request.validation.js'
import { getUserByEmail, createUser } from "../services/user.service.js"
import { hashPasswordWithSalt } from '../utils/hash.js';
import { createUserToken } from "../utils/token.js"
import { z } from 'zod';

const router = express.Router();

router.post('/signup', async (req, res) => {
    const validationResult = 
        await signupPostRequestBodySchema.safeParseAsync(req.body)

    if (validationResult.error) {
        return res.status(400).json({ error: z.treeifyError(validationResult.error) })
    }

    const { firstname, lastname, email, password } = validationResult.data;
    
    const existingUser = await getUserByEmail(email)

    if (existingUser) {
        return res.status(400).json({ error: `User with email ${email} already exist` })
    } 

    const { salt, password: hashedPassword } = hashPasswordWithSalt(password)

    const user = await createUser(firstname, lastname, email, hashedPassword, salt);

    return res.status(201).json({ data: { userId: user.id } })
})

router.post('/login', async (req, res) => {

    const validatioResult = await loginPostRequestBodySchema.safeParseAsync(req.body);

    if (validatioResult.error) {
        return res.status(400).json({ error: z.treeifyError(validatioResult.error)});
    }

    const { email, password } = validatioResult.data;

    const user = await getUserByEmail(email);

    if (!user) {
        return res
            .status(404)
            .json({ error: `User with email ${email} does not exists` });
    }

    const { password: hashedPassword } = hashPasswordWithSalt(password, user.salt);
    if (user.password !== hashedPassword) {
        return res.status(400).json({ error: `Invalid password` });
    }

    // const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    const token = await createUserToken({ id: user.id })

    return res.json({ token })
    
})

export default router;