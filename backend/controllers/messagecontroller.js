import { Conversation } from "../models/conversationModel.js";
import { Message } from "../models/participants.js";


export const sendMessage=async(req,res)=>{
    try{

    const senderId=req.id;
    const reciverId=req.params.id;
    const {message}=req.body;

    let gotconversation=await Conversation.findOne({
        participants:{$all:[senderId,reciverId]},
    });

    if(!gotconversation){
       gotconversation=await Conversation.create({
            participants:[senderId,reciverId],
       });
    }

    const newmessage=await Message.create({
        senderId,
        reciverId,
        message
    });

    if(newmessage){
        gotconversation.messages.push(newmessage._id);
    }

    await Promise.all([newmessage.save(),gotconversation.save()]);

    return res.status(200).json({
        message:newmessage,
        success:true,
        newmessage,
    });
    }
    catch(err){
        console.log(err);
    }
    
}

export const getMessages=async(req,res)=>{
    try{
        const senderId=req.id;
        const reciverId=req.params.id;
        const {message}=req.body;

        const conversation= await Conversation.findOne({
            participants:{$all:[senderId,reciverId]},
        }).populate("messages");
        if (!conversation) {
            return res.status(200).json({
                messages: [], // ✅ Return an empty array instead of undefined
                success: true,
                message: "No conversation found",
            });
        }

        return res.status(200).json({
            messages:conversation.messages,
            success:true,
        })
    }
    catch(err){
        console.log(err);
    }
   
}