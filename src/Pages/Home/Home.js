import React from 'react'
import App from '../../App'
import Layout from '../../Layout/Layout'
import Hometop from '../../Components/HomeTop/Hometop'
import Homeswiper from '../../Components/HomeSwiper/Homeswiper'
import Homeshop from '../../Components/HomeShop/Homeshop'

const Home = () => {
  return (
    <div>
      <Layout>
        <Hometop/>
        <Homeswiper/>
        <Homeshop/>
      </Layout>
    </div>
  )
}

export default Home
