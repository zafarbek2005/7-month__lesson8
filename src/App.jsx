import React from 'react'
import Navbar from './Components/Header/Navbar'
import Home from './Components/Home/Home'
import Cartlink from './Pages/Cart'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
    
    <Navbar/>
    <Home/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/wishlist" element={<Cartlink/>} />
    <Route path="/karzinka" element={<Cartlink/>} />
   
  </Routes>
    
    
    
    </>
  )
}

export default App