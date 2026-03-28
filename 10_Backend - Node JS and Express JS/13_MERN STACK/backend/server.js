import express from "express";
import dotenv from "dotenv";
import colors from 'colors';
import connectDB from "./config/db.js";
import goalsRoutes from './routes/goalRoutes.js' 
import UserRoutes from './routes/userRoutes.js' 
import errorHandler from "./middleware/errorMiddleware.js";

dotenv.config()
const app = express();
connectDB()



//
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


app.use(errorHandler);
app.use('/api/goals', goalsRoutes)
app.use('/api/users', UserRoutes)


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

