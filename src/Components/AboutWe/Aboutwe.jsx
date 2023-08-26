import React from 'react'
import styled from "../AboutWe/Aboutwe.scss"
const Aboutwe = () => {
  return (
    <div className='aboutwe'>
      <div className="container">
        <div className="row">
            <div className="col-xl-6">
                <hr />
                <h2>Who We Are</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.</p>
            </div>
            <div className="col-xl-6">
                <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/slide-image-free-img.jpg" alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutwe
