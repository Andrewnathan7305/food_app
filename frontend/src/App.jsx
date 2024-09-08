import React, { useState } from 'react'
import Navbar from './components/navbar/navbar'

import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import Placeorder from './pages/Placeorder/Placeorder'
import Footer from './components/footer/footer'
import Login from './components/Login/Login'
const App = () => {
  const[showLogin,setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<Placeorder/>} />
      </Routes>
      <Footer/>
    </div>
    </>
    
  )
}

export default App
