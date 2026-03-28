const express = require('express');

const bookRouter = require('./routes/book.routes')
const { loggerMaddleware } = require('./middlewares/logger')

const PORT = 8000;
const app = express();

// Middlewares (Plugins)
// Middleware level
app.use(express.json())
app.use(loggerMaddleware)

// Routes
app.use('/books', bookRouter)


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))