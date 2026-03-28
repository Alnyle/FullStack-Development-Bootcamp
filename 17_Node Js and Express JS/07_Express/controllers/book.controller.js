const { BOOKS } = require('../models/book')

exports.getAllBooks = function(req, res) {
    res.json(BOOKS)
}

exports.getBook = function(req, res) {
    
    const id = parseInt(req.params.id)
    if(isNaN(id))
        return res.status(400).json({ error: `Id must be of type number` })


    target = BOOKS.find(book => book.id === id)
    if (!target) {
        return res.status(404).json({ error: `Book with id ${id} does not exist!` })
    }
    res.json(target)
}

exports.createBook = function(req, res) {


    const { title, author } = req.body;

    if (!title || title === '') 
        return res.status(200).json({ error: 'title is required'})

    if (!author || author === '') 
        return res.status(200).json({ error: 'author is required'})

    const id = BOOKS.length + 1;
    const book = { id: id, title, author }
    BOOKS.push(book)

    return res.status(201).json({ message: 'Book created succes', id: id })
}

exports.deleteBook = (req, res) => {

    const id = parseInt(req.params.id)
    if(isNaN(id))
        return res.status(400).json({ error: `Id must be of type number` })

    const indexToDelete = BOOKS.findIndex(book => book.id === id)
    if (indexToDelete < 0) {
        return res
            .status(404)
            .json({ error: `Book with id ${id} does not exist!` })
    }

    BOOKS.splice(indexToDelete, 1)

    return res.status(200).json({ message: 'book deleted' })
}