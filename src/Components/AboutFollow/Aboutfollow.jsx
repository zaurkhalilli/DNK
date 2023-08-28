import React from 'react'
import styled from "../AboutFollow/Aboutfollow.scss"
import {BiLogoFacebook} from "react-icons/bi"
import {BsTwitter} from "react-icons/bs"
import {AiOutlineInstagram} from "react-icons/ai"
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
            <BsTwitter/>
        </div>
        <div className="instagram">
            <AiOutlineInstagram/>
        </div>
        <div className="google">
            
        </div>  
        </div>
      </div>
    </div>
  )
}

export default Aboutfollow
