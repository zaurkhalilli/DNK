import React from 'react'
import App from '../../App'
import Layout from '../../Layout/Layout'
import Hometop from '../../Components/HomeTop/Hometop'
import Homeswiper from '../../Components/HomeSwiper/Homeswiper'

const Home = () => {
  return (
    <div>
      <Layout>
        <Hometop/>
        <Homeswiper/>
      </Layout>
    </div>
  )
}

export default Home
