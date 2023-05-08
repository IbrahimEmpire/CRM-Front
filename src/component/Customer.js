import React, { useState } from 'react'
import { Template } from './Template'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

export const Customer = () => {
  const navigate = useNavigate()
  const [empId, setEmpId] = useState()
  const [custId, setCustId] = useState()
  const [custName, setCustName] = useState()
  const [email, setEmail] = useState()
  const [job, setJob] = useState()
  const [mobile, setMobile] = useState()
 

  const Signup = async()=>{
    let paylode = {empId,custId,custName,job,email,mobile}
    console.log(paylode)
    try {
      
      
      let res = await axios.post(`https://crm-2.onrender.com/cust/post`, paylode)
      toast.success(res.data.message)
      navigate('/user')
    
    
    } catch (error) {
      console.log(error)
      toast.error(error)
    }
  }
 
  return (
    <Template>
        
    <div className='cust-container container '>

        <div className='cust inner-container'>
            <div ><img className='img' src='https://www.shutterstock.com/image-vector/customer-care-vector-icon-management-260nw-1502216441.jpg'/></div>
      
            <div><input onChange={(e)=> setEmpId(e.target.value)} className='input' type='number' placeholder='Employee Id'/></div>
            <div><input onChange={(e)=> setCustId(e.target.value)} className='input' type='number' placeholder='Customer Id'/></div>
        <div><input onChange={(e)=> setCustName(e.target.value)} className='input' type='text' placeholder='Customer Name'/></div>
       
        <div><input onChange={(e)=> setEmail(e.target.value)} className='input' type='email' placeholder='Customer Email'/></div>
        <div> <input onChange={(e)=> setJob(e.target.value)} className='input' type='text' placeholder='Job'/></div>
        <div> <input onChange={(e)=> setMobile(e.target.value)} className='input' type='text' placeholder='Mobile Number'/></div>
      <div>
      <textarea rows="90" cols="90" className='tinput input' type='text' placeholder='Requests and Leads'/>
      </div>
        <button onClick={()=> Signup()}  className='cust-btn btn '>Register</button>
        </div>
  
    
    </div>
    </Template>
  )
}
