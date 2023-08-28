import express from "express"
import dotenv from 'dotenv'
import connectDB from "./db.js";
import fileRoutes from "./routes/fileRoutes.js";
import cors from 'cors'

dotenv.config()

const app = express();

// using middleware
app.use(cors({
    origin: process.env.CLIENT_URL
}))

app.use(express.json())


// setting up routes
app.use('/api/v1' , fileRoutes)

// setting up server and database
connectDB();
app.listen(process.env.PORT , ()=>{
    console.log("server is running ....");
})