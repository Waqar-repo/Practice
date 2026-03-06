
import React, { use, useState } from 'react'
import { Link } from 'react-router-dom'
import BooksContainer from '../components/BooksContainer'
import Header from '../components/Header'
import Search from './Search'

export default function Home() {
const [query,setQuery] = useState('')
  return (
    <>
     <Search setQuery={setQuery} />
   <BooksContainer query={query} />
   <nav>
    
   </nav>
  </>
  )
}
