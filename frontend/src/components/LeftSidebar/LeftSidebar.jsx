import React, { useState } from 'react'
import './LeftSidebar.css'
import assets from '../../assets/assets'
import useGetOtherUsers from '../../hooks/useGetOtherUsers';
import {useDispatch, useSelector} from "react-redux"
import OtherUser from './OtherUser';
import OtherUsers from './OtherUsers';
import { SetotherUsers } from '../../redux/userSlice';
import toast from "react-hot-toast"

const LeftSidebar = () => {
  const [search,setSearch]=useState("");
  const {otherUsers}=useSelector(store=>store.user);
  const dispatch=useDispatch();
  
  const submitHandler=(e)=>{
    e.preventDefault();
    const conversationuser=otherUsers?.find((user)=>user.name.toLowerCase().includes(search.toLowerCase()));
    if(conversationuser){
      dispatch(SetotherUsers([conversationuser]));
    }else{
      toast.error(("User not found"));
      
    }
  }
  
  return (
    <div className='ls'>
      <div className='ls-top'>
        <div className='ls-nav'>
            <img src={assets.logo} alt="" className='logo'/>
            <div className='menu'>
                <img src={assets.menu_icon} alt=""/>
                <div className="sub-menu">
                  <p>Edit Profile</p>
                  <hr/>
                  <p>Logout</p>
                </div>
            </div>
        </div>
        <form onSubmit={submitHandler}>
        <div  className='ls-search'>
            <img src={assets.search_icon} alt=""/>
            <input 
              type="text" 
              placeholder='Search here...'
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              />
        </div>
        </form>
      </div>
      <div className='ls-list'>
       <OtherUsers/>
      </div>
    </div>
  )
}

export default LeftSidebar
