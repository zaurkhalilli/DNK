import React from 'react'
import styled from "../AboutFollow/Aboutfollow.scss"
import {BiLogoFacebook} from "react-icons/bi"
import {BsTwitter} from "react-icons/bs"
import {AiOutlineInstagram} from "react-icons/ai"
import {AiOutlineGooglePlus} from "react-icons/ai"
const Aboutfollow = () => {
  return (
    <div className='follow'>
      <div className="followtxt">
        <br />
        <hr />
        <h2>Follow Us</h2>
        <div className="followicons">
        <div className="facebook">
            <BiLogoFacebook size={25}/>
        </div>
        <div className="twitter">
            <BsTwitter size={22}/>
        </div>
        <div className="instagram">
            <AiOutlineInstagram size={24}/>
        </div>
        <div className="google">
            <AiOutlineGooglePlus size={25}/>
        </div>  
        </div>
      </div>
    </div>
  )
}

export default Aboutfollow
