import File from '../models/fileModel.js'
import fs from 'fs'


export const uploadController = async(req , res)=>{
    try {
        const data = await File.create({name : req.file.originalname , path : req.file.path})
        res.status(200).json({success : true , downloadLink : `${process.env.SERVER_URL}/api/v1/file/${data._id}`})

        // setTimeout(() => {
            
        // }, timeout);
        

        
    } catch (error) {
        res.status(400).json({success : false , error : error.message})
    }
}

export const downloadFileController = async(req , res)=>{
    try {
        const fileId = req.params['fileId']
        const fileData = await File.findById(fileId)
        
        // if requested file does not exist
        if(!fileData) throw new Error("No such file exists")

        fileData.downloadCount++;
        await fileData.save()

        res.download(fileData.path , fileData.name)
        
    } catch (error) {
        res.status(400).json({success : false , error : error.message})
    }
}