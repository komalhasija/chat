import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
     name:{
        type:String,
        required:true,
     },
     bio:{
        type:String,
       
     },
     profilePhoto:{
        type:String,
         default:"",
     },
     password:{
        type:String,
        required:true,
     },
     confirmpassword:{
      type:String,
      
     },
     email:{
        type:String,
        required:true,
     },
     gender:{
      type:String,
      enum:["male","female"],
      required:true,
     },
     phoneNumber:{
        type:Number,
     }
},{timestamps:true});

export const User=mongoose.model('User',userSchema);
