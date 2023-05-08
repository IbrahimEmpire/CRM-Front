import logo from './logo.svg';
import './App.css';
import { Template } from './component/Template';
import { Dashboard } from './component/Dashboard';
import { Login } from './component/Login';
import { Forgot } from './component/Forgot';
import { Signup } from './component/Signup';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Customer } from './component/Customer';
import { Users } from './component/Users';
import { Workers } from './component/Workers';
import { Wrong } from './component/Wrong';


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/cust' element={<Customer/>}/>
        <Route path='/forgot' element={<Forgot/>}/>
        <Route path='/user' element={<Users/>}/>
        <Route path='/workers' element={<Workers/>}/>
        <Route path='/*' element={<Wrong/>}/>
        <Route/>
      </Routes>
{/* <Dashboard/> */}
{/* <Login/> */}
{/* <Forgot/> */}
{/* <Signup/> */}

    </div>
  );
}

export default App;
