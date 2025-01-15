import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRouter from './routes/user.route.js';

const app = express()

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));
app.use(express.json());
const cokkieParser = cookieParser(); 
app.use(cokkieParser);


app.use("/api/v1/user",userRouter);


export default app