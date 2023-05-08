import React from 'react'
import { Template } from './Template'
import { useNavigate } from 'react-router-dom'

export const Wrong = () => {
    const navigate = useNavigate()
  return (
    <Template>
<div className='wrong'>
    <img className='w-img' src='https://c8.alamy.com/comp/2D9R7T6/error-404-page-not-found-vector-illustration-for-web-design-2D9R7T6.jpg'/>
    <h1>Sorry this is invalid URL</h1>
    <button onClick={()=>navigate('/')}>Home</button>
</div>

    </Template>
  )
}
