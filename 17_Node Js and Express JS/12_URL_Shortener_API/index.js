import express from "express";
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js'
import { authenticationMiddleware } from "./middlewares/auth.middleware.js"
import urlRouter from "./routes/url.route.js"

const app = express();
const PORT = process.env.PORT ?? 8000;

app.use(express.json())
app.use(authenticationMiddleware);


app.get('/', async (req, res) => {
    return res.json({ status: "Server is up and running..." })
})

app.use('/user', userRouter);
// dynamic alaways should be last routes
app.use(urlRouter)
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
})