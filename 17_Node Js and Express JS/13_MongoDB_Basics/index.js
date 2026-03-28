import express from "express";
import { connectMongoDB } from "./connection.js"; 
import UserRouter from './routes/user.route.js';
import { authMiddleware } from "./middlewares/auth.middleware.js"
import dotenv from 'dotenv';

dotenv.config()
const app = express();
const PORT =  process.env.PORT ?? 8000;

connectMongoDB(process.env.MONGODB_URL).then(() => 
    console.log(`MongoDB connected`)
)

app.use(express.json())
app.use(authMiddleware)
app.use('/user', UserRouter);
app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));