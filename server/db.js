import mongoose from "mongoose";

const connectDB = ()=>{
    mongoose.connect(process.env.MONGO_URI , {dbName:"fileSharingMadeEasy"}).then(()=>{
        console.log("connected to database");
        
    }).catch(err=> console.error(err.message));
}

export default connectDB