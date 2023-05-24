import { useState } from 'react'

import './App.css'
import Home from './pages/Home'

import AnimalesID from './pages/AnimalesID'
import Register from './pages/Register'
import Login from './pages/Login'
import Nav from './core/Nav/Nav'

function App() {
  

  return (
    
    
    <>  
     <Nav/>
    <Home/>
   
   <AnimalesID/>
   <Register/>
   <Login/>
    </>
  )
}

export default App
