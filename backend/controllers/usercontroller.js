import { User } from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import cookie from "cookie-parser"

export const register=async (req,res)=>{
    try{
        const{name,password,confirmpassword,email,gender}=req.body;
        if(!name || !password || !confirmpassword || !email || !gender ){
            return res.status(400).json({
                message:"Something is missing",
                success:false,
            })
        }
        if(password !== confirmpassword){
            return res.status(404).json({
                message:"password does not match",
                success:false,
            })
        }
        const user=await User.findOne({name});
        if(user){
            return res.status(404).json({
                message:"User already exist",
                success:false,
            })
        }
        const hashedpassword=await bcrypt.hash(password,10);

        const maleProfilePhoto = `https://avatar.iran.liara.run/public/boy?username=${name}`;
        const femaleProfilePhoto = `https://avatar.iran.liara.run/public/girl?username=${name}`;

        await User.create({
            name,
            password:hashedpassword,
            email,

            profilePhoto:gender==='male'?maleProfilePhoto:femaleProfilePhoto,
            gender,

        });

        return res.status(200).json({
            message:"User created successfully",
            success:true,
        });
    }
    catch(error){
         console.log(error);
    }
}

export const login=async (req,res)=>{
    try{
        const {email ,password}=req.body;
        if(!email || !password){
            return res.status(400).json({
                message:"Something is missing",
                success:'false'
            });
        }
        const user= await User.findOne({email});
        if(!user){
            return res.status(400).json({
                message:"User does not exist",
                success:'false'
            }); 
        }
        const ishashedpassword=await bcrypt.compare(password,user.password);
        if(!ishashedpassword){
            return res.status(400).json({
                message:"User does not exist",
                success:'false'
            }); 
        }
        const tokenData={
            userId:user._id,
        }

        const token=await jwt.sign(tokenData,process.env.SECRET_KEY,{expiresIn:'1d'});

        return res.status(200).cookie("token",token,{maxAge:1*24*60*60*1000,httpsOnly:true,sameSite:'strict'}).json({
            _id:user._id,
            name:user.name,
        })

    }
    catch(err){
         console.log(err);
    }
}

export const logout=async (req,res)=>{
    try{
    
    return res.status(202).cookie("token","",{maxAge:0}).json({
        message:"logout successfully",
        success:true,
    });
    }
    catch(err){
        console.log(err);
    }
}

export const getOtherUser=async(req,res)=>{
    try{
        const loggedInUser=req.id;
        const otherUsers=await User.find({_id:{$ne:loggedInUser}}).select("-pasword");
        return res.status(202).json({
            message:"got user successfully",
            otherUsers,
            success:true,
        });
    }
    catch(err){
        console.log(err);
    }
}