import React, { useEffect, useRef } from 'react'
import './ChatBox.css'
import { useSelector } from 'react-redux';
import assets from '../../assets/assets'

const Message = ({message}) => {
    const {authUser,selectedUsers}=useSelector(store=>store.user);
    
    const scroll=useRef();
    useEffect(()=>{
        scroll.current?.scrollIntoView({behaviour:"smooth"});
    },[message]);
  return (

    <div className='chat-msg' >
      <div className={message?.senderId === authUser?._id ? 's-msg' : 'r-msg'}>
            <p className='msg'>{message?.message}</p>
            <div>
              <img src={message?.senderId !== authUser?._id ? authUser?.profilePhoto : selectedUsers?.profilePhoto } alt=""/>
              <p>2:30 PM</p>
            </div>
          </div>
     
          
    </div>
  )
}

export default Message
