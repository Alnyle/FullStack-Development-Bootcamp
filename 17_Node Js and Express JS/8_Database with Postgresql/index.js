require('dotenv/config') 
const db = require('./db')
const { userTable } = require("./drizzle/schema")


async function getAllUsers() {
    const users = await db.select().from(userTable);
    console.log(`Users in DB`, users)
    return users
}

async function createUser({ id, name, email }) {
    await db.insert(userTable).values({
        id,
        name,
        email,
    });
}

// createUser({ id: 1, name: "Ali", email: "Ali@example.com" })
// createUser({ id: 2, name: "Omar", email: "Omar@example.com" })
getAllUsers()