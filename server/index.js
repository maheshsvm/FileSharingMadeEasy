import express from "express"
import dotenv from 'dotenv'
import connectDB from "./db.js";
import fileRoutes from "./routes/fileRoutes.js";
import cors from 'cors'
import QRCode from "qrcode";

dotenv.config()

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

// setting up server and database
connectDB();
app.listen(process.env.PORT, () => {
    console.log("server is running ....");
})