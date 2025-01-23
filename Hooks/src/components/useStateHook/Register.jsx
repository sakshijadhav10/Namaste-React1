// import React from 'react'
import { useState } from "react";
function Register() {
    const [formdata,setFormData]=useState({
        username:"",
        email:"",
        password:"",
        confirm_password:""
});
const handleInput = (e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setFormData((prev)=>{
    return{...prev,[name]:value}

    })

}

  return (
    <div>
        <h1>Register</h1>
        <label >Username</label>
        <input type="text" name="username" id="name" placeholder="name" value={formdata.username} onChange={handleInput} />
        <br />
        <label >Email</label>
        <input type="text" name="email" id="email" placeholder="email" value={formdata.email} onChange={handleInput} />
        <br />
        <label >Password</label>
        <input type="text" name="password" id="password" placeholder="password" value={formdata.password} onChange={handleInput}/>
        <br />
        <label >confirm Password</label>
        <input type="text" name="confirm_password" id="confirm_password" placeholder="Password" value={formdata.confirm_password} onChange={handleInput} />
        <h4>the name is {formdata.username} and the email is {formdata.email}</h4>
    </div>
  )
}

export default Register