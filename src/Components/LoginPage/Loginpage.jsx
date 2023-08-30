import React from 'react'
import styled from "../LoginPage/Loginpage.scss"
const Login = () => {
  return (
    <div className='login'>
      <img src="https://websitedemos.net/brandstore-02/wp-admin/images/wordpress-logo.svg?ver=20131107" alt="" />
        <div className="container">
            <label htmlFor="">Username or Email Address</label>
            <input type="text" />
            <label htmlFor="">Password</label>
            <input type="password" />
            <button>Login</button>
        </div>
    </div>
  )
}

export default Login
