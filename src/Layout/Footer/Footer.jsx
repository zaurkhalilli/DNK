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
                <li><a href=""></a></li>
              </ul>
            </div>
            <div className="col-xl-2"></div>
            <div className="col-xl-3"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
