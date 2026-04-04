import React from 'react'
import { Link } from 'react-router'

export default function Navbar() {
  return (
    <>
    <Link to={'/'}>Home</Link>
    <Link to={'/about'}>About</Link>
    </>
  )
}
