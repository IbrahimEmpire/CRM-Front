import React from 'react'
import { Template } from './Template'

export const Forgot = () => {
  return (
   <Template>
   
    <div className='forgot-container container'>
        <div className='forgot inner-container'>
            <div ><img className='img' src='https://img.icons8.com/nolan/512/forgot-password.png'/></div>
       <div><p className='valid'>Enter Your Valid Email</p></div>
        <div><input className='input' type='email' placeholder='Email'/></div>
        
        
        <button onClick={()=> alert("Sorry... This Function Not Updated We will Update soon...!")} className='btn login-btn'>Submit</button>
        </div>
  
    
    </div>
   </Template>
  )
}
