import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setMessages } from '../redux/messageSlice';

const useGetMessages = () => {
    const {selectedUsers}=useSelector(store=>store.user);
    const dispatch=useDispatch();
    
  useEffect(()=>{
    const fetchmessages=async ()=>{
        try{
            axios.defaults.withCredentials=true;
            const res=await axios.get(`http://localhost:8000/api/v1/message/${selectedUsers?._id}`);
            console.log(res.data);
            dispatch(setMessages(res.data.messages));
        }
        catch(error){
            console.log(error);
        }
    }
    fetchmessages();
  },[selectedUsers])
}

export default useGetMessages
