const express = require('express');
const { getAllBooks, getBook, createBook, deleteBook } = require('../controllers/book.controller')
 
const  router = express.Router();

router.get('/', getAllBooks)
router.get('/:id', getBook)
router.post('/', createBook)
router.delete('/:id', deleteBook)

module.exports = router;