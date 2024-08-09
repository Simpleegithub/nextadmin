"use client"

// import { authenticate } from '../../../lib/actions';
import styles from './loginform.module.css';



import React, { useState } from 'react'

function LoginForm({authenticate }) {
    const [error,setError]=useState();
    const handlelogin= async(formdata)=>{
    const data=await authenticate(formdata);
    data.error && setError(data.error);
    }
  return (

    <form action={handlelogin} className={styles.form}>
    
      <h1>Login</h1>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
      {error && <p>{error}</p>}
    </form>
 
  )
}

export default LoginForm


