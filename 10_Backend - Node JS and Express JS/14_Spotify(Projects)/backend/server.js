import express from 'express';
import dotenv from 'dotenv/config';
import colors from 'colors';
import cors from 'cors'
import errorHandler from './src/middleware/errorMiddleware.js';
import songsRouter from './src/routes/songRoutes.js';
import albumRouter from './src/routes/albumRoutes.js';
import connectDB from './src/config/db.js';
import connectCloudinary from './src/config/cloudinary.js';

dotenv.config;

const app = express();
connectDB();
connectCloudinary()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())


app.use(errorHandler)
app.use('/api/song', songsRouter);
app.use('/api/album', albumRouter)
// app.use('/', async(req, res) => {
//     res.status(200).json({ message: 'this is API is working' })
// })

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})