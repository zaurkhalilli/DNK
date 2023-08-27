import React from 'react'
import styled from "../AboutTeam/Aboutteam.scss"
const Aboutteam = () => {
  return (
    <div className='team'>
      <div className="teamtop">
        <hr />
        <p>A Few Words About</p>
        <h2>Our Team</h2>
        <span>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</span>
      </div>
      <div className="container">
        <div className="row">
            <div className="col-xl-4">
            <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/team2-free-img.png" alt="" />
            <h3>Harvey Spector</h3>
            <p>Founder - CEO</p>
            </div>
            <div className="col-xl-4">
            <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/team1-free-img.png" alt="" />
            <h3>Jessica Pearson</h3>
            <p>COO</p>
            </div>
            <div className="col-xl-4">
            <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/team3-free-img.png" alt="" />
            <h3>Rachel Zain</h3>
            <p>Marketing Head</p>
            </div>
            <div className="col-xl-4">
            <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/team4free-img.png" alt="" />
            <h3>Luise Litt</h3>
            <p>Lead Developer</p>
            </div>
            <div className="col-xl-4">
            <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/team5-free-img.png" alt="" />
            <h3>Katrina Bennett</h3>
            <p>Intern Designer</p>
            </div>
            <div className="col-xl-4">
            <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/team6-free-img.png" alt="" />
            <h3>Mike Ross</h3>
            <p>Intern Designer</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutteam
