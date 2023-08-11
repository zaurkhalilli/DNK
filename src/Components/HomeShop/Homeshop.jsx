import React from 'react'
import styled from "../HomeShop/Homeshop.scss"
const Homeshop = () => {
  return (
    <div className='shop'>
      <div className="container">
        <div className="row">
            <div className="col-xl-4">
                <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/women-fashion-free-img.jpg" alt="" />
                <p>20% Off On Tank Tops</p>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</span>
                <br />
                <br />
                <button>SHOP NOW</button>
            </div>
            <div className="col-xl-4">
                <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/men-fashion-free-img.jpg" alt="" />
                <p>Latest Eyewear For You</p>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</span>
                <br />
                <br />
                <button>SHOP NOW</button>
            </div>
            <div className="col-xl-4">
               <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/footwear-free-img.jpg" alt="" /> 
               <p>Let's Lorem Suit Up!</p>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</span>
                <br />
                <br />
                <button>CHECK OUT</button>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Homeshop
