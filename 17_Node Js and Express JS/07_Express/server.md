```js
const express = require('express');
const fs = require('node:fs');
const PORT = 8000;
const app = express();


const books = [
  { id: 1, name: "Clean Code", author: "Robert C. Martin" },
  { id: 2, name: "The Pragmatic Programmer", author: "Andrew Hunt & David Thomas" },
  { id: 3, name: "Introduction to Algorithms", author: "Thomas H. Cormen" },
  { id: 4, name: "Design Patterns", author: "Erich Gamma et al." },
  { id: 5, name: "Deep Learning", author: "Ian Goodfellow, Yoshua Bengio, Aaron Courville" }
];


function loggerMaddleware(req, res, next) {
    const log = `\n[${Date.now()}] ${req.method} ${req.path}`
    fs.appendFileSync('logs.txt', log, 'utf-8');
    next();
}

function customMiddleware(req, res, next) {
    console.log('I am custom middleware')
}

// Middlewares (Plugins)
// 1. App Middleware level: Bound to the app object using app.use() or app.METHOD().
app.use(express.json())
app.use(loggerMaddleware)
app.use(customMiddleware)

// Routes
app.get('/books', function(req, res) {
    res.json(books)
})

// 2. Route-Middleware level: Bound to specific routes and executed only when those routes are matched.
//                            They are defined as additional arguments in the route handler, 
//                            and they execute in the order they are specified before the final request handler is called.
app.get('/books/:id', customMiddleware,function(req, res) {
    
    const id = parseInt(req.params.id)
    if(isNaN(id))
        return res.status(400).json({ error: `Id must be of type number` })


    target = books.find(book => book.id === id)
    if (!target) {
        return res.status(404).json({ error: `Book with id ${id} does not exist!` })
    }
    res.json(target)
})



app.post('/books', function(req, res) {


    const { title, author } = req.body;

    if (!title || title === '') 
        return res.status(200).json({ error: 'title is required'})

    if (!author || author === '') 
        return res.status(200).json({ error: 'author is required'})

    const id = books.length + 1;
    const book = { id: id, title, author }
    books.push(book)

    return res.status(201).json({ message: 'Book created succes', id: id })
})


app.delete('/books/:id', (req, res) => {

    const id = parseInt(req.params.id)
    if(isNaN(id))
        return res.status(400).json({ error: `Id must be of type number` })

    const indexToDelete = books.findIndex(book => book.id === id)
    if (indexToDelete < 0) {
        return res
            .status(404)
            .json({ error: `Book with id ${id} does not exist!` })
    }

    books.splice(indexToDelete, 1)

    return res.status(200).json({ message: 'book deleted' })
})
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

```