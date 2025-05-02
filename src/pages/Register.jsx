import React, { useState } from 'react'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom';
import { register } from '../services/api';


function Register() {
 
  const [regisForm,setRegisForm]=useState({login:'',password:''})
  const [data,setData]=useState();
 const navigate=useNavigate()
  function handleInput(e){
    setRegisForm({...regisForm,[e.target.name]:e.target.value})
  };

  function handleSubmit(e){
    e.preventDefault();
    register(regisForm).then(res=>
      {
     const token=res.data.token
      if(token){
      localStorage.setItem("register-token",token);
      navigate('/');
    }
    }
    );

    
  };

  return (
    <div className='n-container'><form onSubmit={handleSubmit} >
      <div>
        <label htmlFor="name">Name</label>
        <input onChange={handleInput} type="name" id='name' name='login' required />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input onChange={handleInput} type="password" id='password' name='password' required />
      </div>
         <Button type='submit' label='Giris' />
        
      </form></div>
  )
}

export default Register