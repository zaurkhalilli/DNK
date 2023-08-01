import React from 'react'
import Home from "./Pages/Home/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Pages/Login/Login"
import Layout from "./Layout/Layout";
import About from './Pages/About/About';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Home/>} />
          <Route index path='/login' element={<Login/>} />
          <Route index path='/about' element={<About/>}/>
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
