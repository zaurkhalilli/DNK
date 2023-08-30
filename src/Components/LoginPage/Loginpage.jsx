import React from 'react'
import styled from "../LoginPage/Loginpage.scss"
const Login = () => {
  return (
    <div className='login'>
      <img src="https://websitedemos.net/brandstore-02/wp-admin/images/wordpress-logo.svg?ver=20131107" alt="" />
        <div className="container">
            <label htmlFor="">Username or Email Address</label>
            <br />
            <input type="text" />
            <br />
            <label htmlFor="">Password</label>
            <br />
            <input type="password" />
            <br />
            <div className="loginbtn">
            <button>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Login
