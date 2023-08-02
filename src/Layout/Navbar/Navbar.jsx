import React from 'react'
import styled from "../Navbar/Navbar.scss"
import {PiUserFill} from "react-icons/pi"
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="row">
                <div className="col-xl-2">
                    <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo1-free-img.png" alt="" />
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
                  <a href="">ABOUT</a>
                  <a href="">CONTACT US</a>
                  <a href=""> <PiUserFill size={23} /> Login/Register</a>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
