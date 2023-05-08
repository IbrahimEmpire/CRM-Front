import React, { useEffect, useState } from 'react'
import { Template } from './Template'
import { useNavigate } from 'react-router-dom'
import { URL } from './Url'
import {  toast } from 'react-toastify';
import axios from 'axios';


export const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState()
  const [ password, setPassword] = useState()

  useEffect(()=>{
    sessionStorage.clear()
  },[])

  const handleChange = async()=>{
    const paylode = {email, password}
  
      try {
        let res = await axios.post(`${URL}/Admin/login`, paylode)
        toast.success(res.data.message)
       sessionStorage.setItem("token", res.data.yourToken)
       
      navigate('/user')
      
      } catch (error) {
      
        toast.error(error.response.data.message)
     
      }
    
  }
  return (
    <Template>
    <div className=''> </div>
    <div className='login-container container'>
        <div className='login-container inner-container'>
            <div ><img className='img' src='https://cdn-icons-png.flaticon.com/512/5087/5087579.png'/></div>
        <div><input onChange={(e)=> setEmail(e.target.value)} className='input' type='email' placeholder='Email'/></div>
        <div> <input onChange={(e)=> setPassword(e.target.value)} className='input' type='Password' placeholder='password'/></div>
        <p className='for'><a onClick={()=> navigate('/forgot')} href="#">Forgot Password</a></p>
        <button onClick={()=>handleChange()} className='btn login-btn'>Login</button>
        </div>
  
    
    </div>
    </Template>
  )
}
