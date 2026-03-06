import React from 'react'
import AboutUs from './AboutUs'
import { Link } from 'react-router-dom'

export default function Header() {

  return (
   <>
   <div className='headerContent'>
   <Link to='/' className="headerContent">
      <div className="headerContent">
        <h1 className='Moto'>The Book Haven</h1>
        </div>
   </Link>

  

<Link to="/about" className="aboutUs">About us</Link>


   </div>
   </>
  )
}
