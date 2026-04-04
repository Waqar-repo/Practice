import React from 'react'
import { Link } from 'react-router'

export default function Navbar() {
  return (
    <>
    <div className='nav'>
      <Link to={'/'} className='home'>Home</Link>
    <Link to={'/about'} className='about'>About</Link>
    </div>
    </>
  )
}
