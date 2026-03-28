const express = require('express');
const { eq } = require('drizzle-orm')
const authorsTable = require('../models/author.model')
const booksTable = require('../models/book.model')
const db = require("../db")
const router = express.Router();


router.get("/", async (req, res) => {
    const authors = await db.select().from(authorsTable)

    return res.json(authors)
})

router.get("/:id", async (req, res) => {

    const id = req.params.id

    const [author] = await db.select()
        .from(authorsTable)
        .where((table) => eq(table.id, id))

    if (!author) {
        return res
            .status(404)
            .json({ error: `Author with ID ${req.params.id} does not exist` })
    }
    return res.json(author)
})

router.post("/", async (req, res) => {

    const { firstName, lastName, email } = req.body
    const [result] = await db.insert(authorsTable).values({
        firstName,
        lastName,
        email,
    }).returning({ id: authorsTable.id });

    return res.json({ message: `Author has been created id: ${result.id}` })
})

router.get("/:id/books", async (req, res) => {


    const authorid = req.params.id

    const books = await db.select()
        .from(booksTable)
        .where(eq(booksTable.authorId, authorid))
    
    return res.json(books)
})

module.exports = router;