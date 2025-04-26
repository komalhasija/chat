import React, { useState } from 'react'
import './Signup.css'
import assets from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import toast from "react-hot-toast"

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    gender: "",
  });
  const handleCheckbox = (gender) => {
    setUser({ ...user, gender });
  }
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/v1/user/register", user, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true,
      });
      if (res.data && res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    }
    catch (error) {
      toast.error(error.res?.data?.message);
      console.log(error);
    }


    setUser({
      name: "",
      email: "",
      password: "",
      confirmpassword: "",
      gender: ""
    })
  }
  return (
    <div className='login'>
      <img src={assets.logo_big} alt="" className="logo" />
      <form onSubmit={onSubmitHandler} action="" className='login-form'>
        <h2>Sign Up</h2>
        <div>
          <label className='label'>
            <span className='label-text'>UserName</span>
          </label>
          <input
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            type='text'
            placeholder='username'
            className='form-input'
            required />

        </div>
        <div>

          <input
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            type='email'
            placeholder='Email address'
            className='form-input'
            required />
        </div>
        <div>
          <input
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            type='password'
            placeholder='Password'
            className='form-input'
            required />
        </div>
        <div>
          <input
            value={user.confirmpassword}
            onChange={(e) => setUser({ ...user, confirmpassword: e.target.value })}
            type='password'
            placeholder=' Confirm Password'
            className='form-input'
            required />
        </div>
        <div className="radio">
          <div className='check'>
            <p>Male</p>
            <input
              type="radio"
              name='gender'
              checked={user.gender === "male"}
              onChange={() => handleCheckbox("male")}
              defaultChecked
              className='radio-input' />
           
          </div>
          <div className='check' >
            <p>Female</p>
            <input
              type="radio"
              name='gender'
              checked={user.gender === "female"}
              onChange={() => handleCheckbox("female")}
              defaultChecked
              className='radio-input' />

          </div>
        </div>
        <button type='submit'>Create an Account</button>
        <div className='Login-term'>
          <input type="checkbox" />
          <p>Agree to the terms of use $ privacy policy</p>
        </div>
        <div className='login-forgot'>
          <p className='login-toogle' >Already have an account<Link to="/login"> Login now</Link></p>

        </div>
      </form>
    </div>
  )
}

export default Signup
