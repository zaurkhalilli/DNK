import React from 'react'
import styled from "../AboutTop/Abouttop.scss"
import {PiUserFill} from "react-icons/pi"
import { Link } from 'react-router-dom'
const Abouttop = () => {
  return (
    <div className='abouttop'>
      <div className="container">
            <div className="row">
                <div className="col-xl-2">
                   <Link to="/">
                    <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo1-free-img.png" alt="" />
                    </Link>
                </div>
                <div className="col-xl-6">
                   <div className="menulinks">
                   <a href="">EVERYTHING</a>
                    <a href="">WOMEN</a>
                    <a href="">MEN</a>
                    <a href="">ACCESSORIES</a>
                   </div>
                </div>
                <div className="col-xl-4">
                  <div className="rightnav">
                  <div className="about">
                  <Link to="/about">ABOUT</Link>
                  </div>
                  <div className="contact">
                  <a href="">CONTACT US</a>
                  </div>
                  <div className="loginregister">
                  <Link to="/login"><PiUserFill size={23} />Login/Register</Link>
                  </div>
                  </div>
                </div>
            </div>
        </div>
        <h2>About Us</h2>
    </div>
  )
}

export default Abouttop
