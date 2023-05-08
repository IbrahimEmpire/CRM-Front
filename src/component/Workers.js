import React, { useEffect, useState } from 'react'
import { Template } from './Template'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import { URL } from './Url'

export const Workers = () => {
  const [user , setUser]= useState([])
  const token = sessionStorage.getItem('token')
  const navigate = useNavigate()

  const parseJwt = (token) => {
    try {
      return  JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  };
const tok = parseJwt(token)

  const logout = () => {
    sessionStorage.clear();
    toast.error('Token expired. Login again');
    navigate('/login');
  };

  const getData = async()=>{
  
    try{
      const res = await axios.get(`https://crm-2.onrender.com/Admin/get`,{
        headers:{Authorization: `Bearer ${token}`}
      })
      toast.success(res.data.message)

      setUser(res.data.data)
   
    }
    catch(error){
      toast.error(error);
    }
  }

  const dlt = async(idx)=>{
   
    try {
      let res = await axios.delete(`https://crm-2.onrender.com/Admin/${idx}`,)
    toast.success(res.data.message)
    navigate('/workers')
    } catch (error) {
     
      toast.error(error)
    }
  }


 


  useEffect(() => {
    if (token) {
      getData();
    } else {
      logout();
    }

 
  }, []);

  return (
    <Template>
      
    <div className='card-container'>
  

      { user && user.length > 0 ? user.map((e, i)=>(
        <div key={i} className='user-card'>
        <div ><img className='user-img' src='https://www.citypng.com/public/uploads/small/11640168385jtmh7kpmvna5ddyynoxsjy5leb1nmpvqooaavkrjmt9zs7vtvuqi4lcwofkzsaejalxn7ggpim4hkg0wbwtzsrp1ldijzbdbsj5z.png' alt='user profile'/></div>
            <div><h5>First Name: {e.firstName} </h5>   </div>
            <div><h5>last Name: {e.lastName} </h5>   </div>
            <div><h5>Employee Id: {e.userId}</h5>   </div>
            <div><h5>Email: {e.email}</h5>   </div>
            <div><h5>Role : {e.role}</h5>   </div>
        
          <div>
           
            
            <button onClick={()=>dlt(e.userId)} className='w-btn delte'>Delete</button>
          </div>
      </div>

      ) ) : 
      <div className='msg'>
        
        Only Admin and Manager can see Employees information
      </div>
      }

    </div>
   </Template>
  )
}
