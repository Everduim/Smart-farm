// import { useState } from 'react'
// import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
// import Animales from './pages/Animales'
// import AnimalesID from './pages/AnimalesID'
import Register from './pages/Register'
import Login from './pages/Login'
// import Nav from './core/nav/Nav'

function App() {
  

  return (
    
    
    <>  
    {/* <Nav/> */}
    <Home/>
    <Register/>
    <Login/>
       {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/animales" element={<Animales />} />
          <Route path="/animales/:id" element={<AnimalesID />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes> */}
    </>
  )
}

export default App
