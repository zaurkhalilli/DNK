import React from 'react'
import Footer from '../../Layout/Footer/Footer'
import Abouttop from '../../Components/AboutTop/Abouttop'
import Aboutwe from '../../Components/AboutWe/Aboutwe'
import Aboutteam from '../../Components/AboutTeam/Aboutteam'
import Aboutfollow from '../../Components/AboutFollow/Aboutfollow'
import Abouticon from '../../Components/AboutIcons/Abouticon'

const About = () => {
  return (
    <div>
      <Abouttop/>
      <Aboutwe/>
      <Aboutteam/>
      <Aboutfollow/>
      <Abouticon/>
      <Footer/>
    </div>
  )
}

export default About
