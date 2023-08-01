import React from 'react'
import styled from "../Navbar/Navbar.scss"
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="row">
                <div className="col-xl-2">
                    <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo1-free-img.png" alt="" />
                </div>
                <div className="col-xl-6">
                    <a href="">EVERYTHING</a>
                    <a href="">WOMEN</a>
                    <a href="">MEN</a>
                    <a href="">ACCESSORIES</a>
                </div>
                <div className="col-xl-4">
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
