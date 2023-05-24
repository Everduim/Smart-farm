import { useState } from 'react'

import './App.css'
import Home from './pages/Home'
import Animales from './pages/Animales'
import AnimalesID from './pages/AnimalesID'
import Register from './pages/Register'
import Login from './pages/Login'
import Nav from './core/Nav/Nav'

function App() {
  

  return (
    
    
    <>  
     <Nav/>
    <Home/>
   <Animales/>
   <AnimalesID/>
   <Register/>
   <Login/>
    </>
  )
}

export default App
