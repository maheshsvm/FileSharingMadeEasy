import express from "express"

import dotenv from 'dotenv'
dotenv.config()

import connectDB from "./db.js";
import fileRoutes from "./routes/fileRoutes.js";
import cors from 'cors'
import cleanupCronJob from "./cleanup.js";

// configuring envoirnment variables

const app = express();

// using middleware
app.use(cors({
    origin: process.env.CLIENT_URL
}))

app.use(express.json())


// setting up routes
app.use('/api/v1', fileRoutes)

// routes
// app.get('/getqrcode', (req, res) => {
//     QRCode.toFile('qr/1.png', 'https://www.youtube.com/', {
//         color: {
//             dark: '#02A6F1',  // red dots
//             light: '#FFF' // Transparent background
//         },
//         type: String
//     }, function (err) {
//         if (err) throw err
//         console.log('done')
//     })
//     res.send("done")
// })

// performing cleanup every day at midnight


// Schedule the script to run at midnight (00:00) every day for deleting files older than 7 days
cleanupCronJob.start();


// setting up server and database
connectDB();
app.listen(process.env.PORT, () => {
    console.log("server is running ....");
})