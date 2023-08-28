import express from "express";
import { downloadFileController, uploadController } from "../controllers/fileController.js";
import multer from "multer";
const upload = multer({ dest: 'uploads/' })

const router = express.Router()

router.get('/' , (req , res)=> res.send("I am root endpoint for testing purpose"))

router.post('/upload' , upload.single('file') , uploadController)

router.get('/file/:fileId' , downloadFileController)

export default router