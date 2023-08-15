import React from 'react'
import styled from "../HomeIcons/Homeicon.scss"
const Homeicon = () => {
  return (
    <div className='icons-section'>
      <div className="container">
        <div className="row">
            <div className="col-xl-3">
                <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/globe-free-img.png" alt="" />
                <p>Worldwide Shipping</p>
                <span>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</span>
            </div>
            <div className="col-xl-3">
                <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/quality-free-img.png" alt="" />
                <p>Best Quality</p>
                <span>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</span>
            </div>
            <div className="col-xl-3">
                <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/tag-free-img.png" alt="" />
                <p>Best Offers</p>
                <span>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</span>
            </div>
            <div className="col-xl-3">
                <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/lock-free-img.png" alt="" />
                <p>Secure Payments</p>
                <span>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Homeicon
