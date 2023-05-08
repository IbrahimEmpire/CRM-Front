import React, { useState } from 'react'
import { Template } from './Template'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { URL } from './Url'
import { toast } from 'react-toastify'

export const Signup = () => {
  const navigate = useNavigate()
  const [userId, setUserId] = useState()
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [role, setRole] = useState()

  const Signup = async()=>{
let paylode = {userId,firstName,lastName,email,password,role}
console.log(paylode)
try {
  
  
  let res = await axios.post(`https://crm-2.onrender.com/Admin/post`, paylode)
  toast.success(res.data.message)
  navigate('/user')

} catch (error) {
  console.log(error)
  toast.error(error)
}


  }
  return (
    <Template>
         <div className=''> </div>
    <div className='sign-container container '>
        <div className='sign inner-container'>
            <div ><img className='img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLHyMme-eNnP-VhO9CdlqctC6bMTcKIFMoBg&usqp=CAU'/></div>
        <div><input className='input' type='number' placeholder='User Id' onChange={(e)=> setUserId(e.target.value)}/></div>
        <div><input className='input' type='text' placeholder='First Name' onChange={(e)=> setFirstName(e.target.value)}/></div>
        <div><input className='input' type='text' placeholder='Last Name' onChange={(e)=> setLastName(e.target.value)}/></div>
        <div><input className='input' type='email' placeholder='Email' onChange={(e)=> setEmail(e.target.value)}/></div>
        <div> <input className='input' type='Password' placeholder='password' onChange={(e)=> setPassword(e.target.value)}/></div>
      <div>
      <input className='input' type='text' placeholder='Role eg:Admin, Manager, Employe 'onChange={(e)=> setRole(e.target.value)}/>
      </div>
        <button onClick={()=> Signup()}  className='btn login-btn'>Sign Up</button>
        </div>
  
    
    </div>
    </Template>
  )
}
