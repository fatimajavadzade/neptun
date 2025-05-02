import React, { useState } from 'react'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom';
import { register } from '../services/api';


function Register() {
 
  const [regisForm,setRegisForm]=useState({login:'',password:''})
  const [error,setError]=useState('');
 const navigate=useNavigate()
  function handleInput(e){
    setRegisForm({...regisForm,[e.target.name]:e.target.value});
    setError('');
  };

  function handleSubmit(e){
    e.preventDefault();

    if (regisForm.password.length < 8) {
      setError("Sifrenin uzunlugu minimum 8 olmalidir")
      return
    }
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
        {error&&<p className='text-red-500 italic text-[10px]'>{error}</p>}
        <input onChange={handleInput} type="password" id='password' name='password' required />
      </div>
         <Button type='submit' label='Giris' />
        
      </form></div>
  )
}

export default Register