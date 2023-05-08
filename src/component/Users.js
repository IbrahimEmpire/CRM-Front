


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Template } from './Template';
import { URL } from './Url';
import { toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const token = sessionStorage.getItem('token');

  const logout = () => {
    sessionStorage.clear();
    toast.error('Token expired. Login again');
    navigate('/login');
  };

  const getUsers = async () => {
    try {
      const { data } = await axios.get(`${URL}/cust/get`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      
      toast.success(data.message);
      setUsers(data.cust);
      console.log(users)
    

    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const dlt = async(custId)=>{
   
    try {
      let res = await axios.delete(`https://crm-2.onrender.com/cust/${custId}`,)
    toast.success(res.data.message)
    navigate('/user')
    } catch (error) {
      console.log(error)
      toast.error(error)
    }
  }

  useEffect(() => {
    if (token) {
      getUsers();
    } else {
      logout();
    }

  }, []);

  return (
    <Template>
      <div className='main'>
        <div className='nav-cust'>
          <button  onClick={() => navigate('/cust')} className='cus-btn'>
            Add Customer
          </button>
          <button  onClick={() => navigate('/workers')} className='cus-btn'>
          Employees
          </button>
        </div>

        <div className='card-container'>
          {users && users.length > 0
            ? users.map((user, idx) => (
                <div key={idx} className='user-card'>
                   <div>
                    <h5 className='emp'>Employee Id: {user.empId}</h5>
                  </div>
                  <div>
                    <img
                      className='user-img'
                      src='https://www.citypng.com/public/uploads/small/11640168385jtmh7kpmvna5ddyynoxsjy5leb1nmpvqooaavkrjmt9zs7vtvuqi4lcwofkzsaejalxn7ggpim4hkg0wbwtzsrp1ldijzbdbsj5z.png'
                      alt='user profile'
                    />
                  </div>

                 

                  <div>
                    <h5>Name: {user.custName}</h5>
                  </div>

                  <div>
                    <h5>Customer Id: {user.custId}</h5>
                  </div>

                  <div>
                    <h5>Email: {user.email}</h5>
                  </div>

                  <div>
                    <h5>Mobile No: {user.mobile}</h5>
                  </div>

                  <div>
                    <h5>Job: {user.job}</h5>
                  </div>
                  <div>
           
            <button onClick={()=>dlt(user.custId)} className='w-btn delte'>Delete</button>
          </div>
                </div>
              ))
            : 'No users available.'}
        </div>
      </div>
    </Template>
  );
};