import React, { useEffect } from 'react'
import './ChatBox.css'
import assets from '../../assets/assets'
import useGetMessages from '../../hooks/useGetMessages';
import { useDispatch, useSelector } from 'react-redux';
import Messages from './Messages';
import { setSelectedConversation, setMessages } from '../../redux/messageSlice';
import SendInput from './SendInput';
import { SetselectedUsers } from '../../redux/userSlice';


const ChatBox = () => {
  const { authUser, selectedUsers } = useSelector(store => store.user);
  const dispatch=useDispatch();
  useEffect(()=>{
    return ()=>{
      dispatch(SetselectedUsers(null));
    }
  },[]);

  return (
    <div className='chat-box'>
      {
        selectedUsers !== null ? (
          <div>
            <div className='chat-user'>
              <img src={selectedUsers?.profilePhoto} alt=" " />
              <p>{selectedUsers?.name}<img className='dot' src={assets.green_dot} /></p>
              <img src={assets.help_icon} className='help' alt="" />
            </div>

            <Messages />
            <SendInput />
          </div>

        ) : (<div>

          <div>
            <h1>Hi!{authUser?.name}</h1>
          </div>
          <div>
            <h1 className="donot">
              Lets!Start conversation
            </h1>
          </div>
        </div>
        )
      }
    </div>
  )
}

export default ChatBox
