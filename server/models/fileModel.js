import mongoose from "mongoose";

const fileSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    path : {
        type : String,
        required : true
    },
    downloadCount : {
        type : Number,
        required : true,
        default : 0
    }
} , {timestamps : true})

const File = mongoose.model('file' , fileSchema)

export default File