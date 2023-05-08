import React from 'react'
import { useNavigate } from 'react-router-dom'


export const Template = ({children, title}) => {
const navigate = useNavigate()
  return (
    <div className='main-container'>
        <div className= 'nav-bar'>
            <div className='nav-title'>
CRM
<div>
<button className='btn4 nav-btn' onClick={()=> navigate('/')} type="submit">Home</button>
  <button className='btn2 nav-btn' onClick={()=> navigate('/login')}  type="submit">Login</button>
  <button className='btn3 nav-btn' onClick={()=> navigate('/signup')}  type="submit">SignUp</button>
</div>
            </div>
{children}
        </div>
        <div className='title'>
            {title}
        </div>
    </div>
  )
}
