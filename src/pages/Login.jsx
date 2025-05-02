import React, { useState } from 'react'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import { login } from '../services/api'


function Login() {
 
const [loginForm,setLoginForm]=useState({login:'',password:""})

function handleInput(e){
  setLoginForm({...loginForm,[e.target.name]:e.target.value})
}

function handleSubmit(e){
  e.preventDefault();
  login(loginForm)
  .then((res)=>{
  if(res.data.token){
    localStorage.setItem("login-token",res.data.token);
    navigate('/')
  }
})
}

  return (
   <div className='n-container flex justify-between py-6'>
    <div>
    <div>Yeni müştəri</div>
    <Link to='/create-account'>
        <Button label='Davam et' />
    </Link>
    </div>

 <br/><br/>

  <div>  
  <div>Daimi müştəri</div>
  <p>Mən daimi müştəriyəm</p>
  <form onSubmit={handleSubmit} >
  <div>
    <label htmlFor="name">Name</label>
    <input onChange={handleInput} type="name" id='name' name='login' required />
  </div>
  <div>
    <label htmlFor="password">Password</label>
    <input onChange={handleInput} type="password" id='password' name='password' required />
  </div>
     <Button type='submit' label='Giris' />
    
  </form>
  </div>





   </div>
   )
}

export default Login