import { useState } from 'react'

import './App.css'
import './index.css'
import { Outlet } from 'react-router'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
    <Navbar />
     <Outlet />
    </>
  )
}

export default App
