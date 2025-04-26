import React, { useState } from 'react'
import './Login.css'
import assets from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import toast from "react-hot-toast"
import { useDispatch } from "react-redux"
import axios from 'axios'
import { SetauthUser } from '../../redux/userSlice.js'

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/v1/user/login", user, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });

      navigate("/chat");
      console.log(res);
      dispatch(SetauthUser(res.data));
      toast.success(res.data.message);
    
    }
    catch (error) {
      toast.error(error.res.data.message);
      console.log(error);
    }
    setUser({
      email: "",
      password: "",
    })
  }
  return (
    <div className='login'>
      <img src={assets.logo_big} alt="" className="logo" />
      <form onSubmit={onSubmitHandler} action="" className='login-form'>
        <h2>Login</h2>
        <input
          type='email'
          placeholder='Email address'
          className='form-input'
          required
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type='password'
          placeholder='Password'
          className='form-input'
          required
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button type='submit'>"Login Now"</button>
        <div className='Login-term'>
          <input type="checkbox" />
          <p>Agree to the terms of use $ privacy policy</p>
        </div>
        <div className='login-forgot'>
          <p className='login-toogle'>Create an Account<Link to="/signup"> Click here</Link></p>
        </div>
      </form>
    </div>
  )
}

export default Login
