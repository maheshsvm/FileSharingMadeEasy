import mongoose from "mongoose";

const fileSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    downloadCount: {
        type: Number,
        required: true,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true })

// incoparationg auto delete functionality
fileSchema.index({ createdAt: 1 }, { expireAfterSeconds: 7 * 24 * 60 * 60 });

const File = mongoose.model('file', fileSchema)

export default File