require('dotenv/config')
const express = require('express');

const bookRouter = require('./routes/book.routes')
const AuthorRoute = require('./routes/author.route')
const { loggerMaddleware } = require('./middlewares/logger')
const PORT = 8000;
const app = express();

// Middlewares (Plugins)
// Middleware level
app.use(express.json())
app.use(loggerMaddleware)

// Routes
app.use('/books', bookRouter);
app.use('/authors', AuthorRoute);


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))