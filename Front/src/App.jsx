
// import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Header from './core/header/Header'
import './App.css'
import Home from './pages/Home'
import Animales from './pages/Animales'
import AnimalesID from './pages/AnimalesID'
import Register from './pages/Register'
import Login from './pages/Login'
import { RequireAuth } from './components/RequireAuth'

function App() {
  

  return (
    
    
    <>  

    <Header/>
  
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/animales" element= {<RequireAuth><Animales/></RequireAuth>}/>
          <Route path="/animales/:id" element={<AnimalesID />}  />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Register />} />

         
        </Routes> 

    </>
  )
}

export default App
