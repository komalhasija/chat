import mongoose from "mongoose";
const connectDB=async ()=>{
    try{
        await mongoose.connect(process.env.Mongo_Url);
        console.log("connected to db");
    }
    catch(err){
        console.log(err);
    }
}
export default connectDB;