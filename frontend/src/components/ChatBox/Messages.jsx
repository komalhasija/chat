import React, { useEffect, useRef } from 'react'
import useGetMessages from '../../hooks/useGetMessages'
import { useSelector } from 'react-redux';
import Message from './Message';
import './ChatBox.css'

const Messages = () => {
  useGetMessages();
  const { messages } = useSelector(store => store.message);
  const { selectedUsers, authUser } = useSelector(store => store.user);
  const scroll = useRef();
  useEffect(() => {
    scroll.current?.scrollIntoView({ behaviour: "smooth" });
  }, [messages]);
  if (!messages) {
    return <div className='hi'>Say Hello to {selectedUsers.name}!</div>;
  }
  return (
    <div className='chat-msg'>
      {messages && messages?.map((message) => {
        return (
          <Message key={message._id} message={message} />

        )
      })}
    </div>
  )
}

export default Messages
