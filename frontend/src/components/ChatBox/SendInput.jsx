import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import { setMessages } from '../../redux/messageSlice';

import assets from '../../assets/assets'

const SendInput = () => {
    const [message,setMessage]=useState("");
    const selectedUsers=useSelector(store=>store.user.selectedUsers);
    const messages=useSelector(store=>store.message.messages)||[];
    const dispatch=useDispatch();

    const onSubmithandler=async(e)=>{
        e.preventDefault();
        if (!message.trim()) return; 
        try{
            const res=await axios.post(`http://localhost:8000/api/v1/message/send/${selectedUsers?._id}`,{message},{
                headers:{
                    "Content-Type":'application/json'
                },
                withCredentials:true
            });
            if (res.data?.message) {
                // ✅ Ensure new message is correctly structured
              
                console.log(res);
                dispatch(setMessages([...messages, res?.data?.newmessage]));
            }
            setMessage("");
        }
        catch(error){
            console.log(error);
        }
        setMessage("");
    }

    return (
        <form onClick={onSubmithandler}>
            <div className='chat-input'>
                <input 
                type='text' 
                placeholder='Send a message....'
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
                 />
                <input type='file' id='image' accept='image/png,image/jpeg' hidden />
                <label>
                    <img src={assets.gallery_icon} alt="" />
                </label>
                <button type="submit"><img src={assets.send_button} alt="" /></button>
            </div>
        </form>
    )
}

export default SendInput
