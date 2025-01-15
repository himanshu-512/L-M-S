import dotenv from 'dotenv'
dotenv.config();
connectDB();
import app from './app.js';
import { connectDB } from './db/db.js';



const PORT = process.env.PORT || 5000;



app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})