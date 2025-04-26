import React, { useState } from 'react'
import './Profileupdate.css'
import assets from '../../assets/assets'

const Profileupdate = () => {

  const [image,setimage]=useState(false);
  return (
    <div className='profile'>
      <div className='profile-container'>
        <form action="">
          <h3>Profile Details</h3>
          <label htmlfor="avatar">
            <input onChange={(e)=>setimage(e.target.files[0])} type="file" id='avatar' accept='.png .jpg .jpeg' hidden />
            <img src={image?URL.createObjectURL(image):assets.avatar_icon} alt=""/>
            upload profile image
          </label>
          <input type="text" placeholder='Your Name' required/>
          <textarea placeholder='Write profile bio' required></textarea>
          <button type="submit">Save</button>
        </form>
        <img className='profile-pic' src={image?URL.createObjectURL(image):assets.logo_icon} alt=""/>
      </div>
    </div>
  )
}

export default Profileupdate
