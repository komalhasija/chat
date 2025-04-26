import jwt from "jsonwebtoken";
export const isAuthenticated=async(req,res,next)=>{
    try{
        const token=req.cookies.token;
        if(!token){
            return res.status(400).json({
                message:"User not Authenicated",
                success:false
            });
        }
        const decode=await jwt.verify(token,process.env.SECRET_KEY);
        if(!decode){
            return res.status(400).json({
                message:"token not correct",
                success:false
            });
        }
        req.id=decode.userId;
        next();
    }
    catch(error){
        console.log(error);
    }
}