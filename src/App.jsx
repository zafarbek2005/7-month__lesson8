import React from 'react'
import Navbar from './Components/Header/Navbar'
import Home from './Components/Home/Home'
import Cartlink from './Pages/Cart'
import Wishlist from './Pages/Wishes'
import { Route, Routes } from 'react-router-dom'
import Banner from './Components/Banner/Banner'

const App = () => {
  return (
    <>
    
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/wishlist" element={<Wishlist/>} />
    <Route path="/karzinka" element={<Cartlink/>} />
   
  </Routes>
    
    
    
    </>
  )
}

export default App