import express from "express";
import connectDB from "./utils/db.js";
import dotenv from "dotenv";
import userRoute from "./routes/userroute.js";
import messageRoute from "./routes/messageroute.js"
import cookieparser from "cookie-parser"
import cors from "cors"

dotenv.config({});
const app=express();

const corsOption={
    origin:'http://localhost:5173',
    credentials:true
}
app.use(cors(corsOption));
const PORT=process.env.PORT||5000;
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieparser());


app.use("/api/v1/user",userRoute);
app.use("/api/v1/message",messageRoute);

app.listen(PORT,()=>{
    connectDB();
    console.log(`server is listening to Port ${PORT}`);

})