import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import posts from './routes/post.js'
import logger from './middleware/logger.js'
import errorHandler from './middleware/error.js'
import notFound  from './middleware/notFound.js'
const PORT = process.env.PORT || 8000;

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)


const app = express();

// setup static folder middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger)



// middleware: are just function run between incoming request and out going response
app.use(express.static(path.join(__dirname, 'public')))

// body parser folder 

// Routes
app.use('/api/posts', posts);

// error handler
app.use(notFound);
app.use(errorHandler);

app.listen(8000, () => console.log(`Server is running or port ${PORT}`));
