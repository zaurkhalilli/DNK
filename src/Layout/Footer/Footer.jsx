import React from 'react'
import styled from "../Footer/Footer.scss"
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footertop">
        <a href="">SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.</a>
      </div>
      <div className="footercenter">
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo@2x-free-img.png" alt="" />
              <h3>The best look anytime, anywhere.</h3>
            </div>
            <div className="col-xl-2">
              <ul>For Her
                <li><a href="">Women Jeans</a></li>
                <li><a href="">Tops and Shirts</a></li>
                <li><a href="">Women Jackets</a></li>
                <li><a href="">Heels and Flats</a></li>
                <li><a href="">Women Accessories</a></li>
              </ul>
            </div>
            <div className="col-xl-2">
            <ul>For Him
                <li><a href="">Men Jeans</a></li>
                <li><a href="">Men Shirts</a></li>
                <li><a href="">Men Shoes</a></li>
                <li><a href="">Men Accessories</a></li>
                <li><a href="">Men Jackets</a></li>
              </ul>
            </div>
            <div className="col-xl-3">
             <div className="rightside">
             <h4>Subscribe</h4>
              <br />
              <input type="text" placeholder='Your email address...' />
              <br />
              <br />
              <button>SUBSCRIBE</button>
             </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="footerbottom">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <h5>Copyright © 2023 Brandstore. Powered by Brandstore.</h5>
            </div>
            <div className="col-xl-6">

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
