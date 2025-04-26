import React from 'react'
import './RightSidebar.css'
import assets from '../../assets/assets'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import toast from "react-hot-toast"

const RightSidebar = () => {
  const navigate=useNavigate();

  const logouthandler=async ()=>{
    try{
      const res=await axios.get("http://localhost:8000/api/v1/user/logout");
      toast.success(res.data.message);
      navigate("/login");
    }
    catch(err){
      console.log(err);
   
    }
  }
  return (
   
      <div className='rs'>
        <div className='rs-profile'>
            <img src={assets.profile_img} alt=""/>
            <h3>Richard Sanford<img src={assets.green_dot} className='dot' alt=""/></h3>
            <p>Hey, There i am Richard Sanford using chat app</p>
        </div>
      
        <hr/>
        <div className='rs-media'>
          <p>Media</p>
          <div>
            <img src={assets.pic1} alt=""/>
            <img src={assets.pic2} alt=""/>
            <img src={assets.pic3} alt=""/>
            <img src={assets.pic4} alt=""/>
            <img src={assets.pic1} alt=""/>
            <img src={assets.pic2} alt=""/>
          </div>
        </div>
        <button onClick={logouthandler}>Logout</button>
    </div>
  )
}

export default RightSidebar
