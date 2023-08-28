import React from 'react'
import styled from "../AboutFollow/Aboutfollow.scss"
import {BiLogoFacebook} from "react-icons/bi"
const Aboutfollow = () => {
  return (
    <div className='follow'>
      <div className="followtxt">
        <br />
        <hr />
        <h2>Follow Us</h2>
        <div className="followicons">
        <div className="facebook">
            <BiLogoFacebook/>
        </div>
        <div className="twitter">

        </div>
        <div className="instagram">

        </div>
        <div className="google">
            
        </div>  
        </div>
      </div>
    </div>
  )
}

export default Aboutfollow
