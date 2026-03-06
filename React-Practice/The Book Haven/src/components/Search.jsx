import React from 'react'

export default function Search({setQuery}) {
  return (
   <>
  
    <form action="">
 
    <div className="searchContent">
    <input for type="text" placeholder='Search a Book' htmlFor='book' onChange={(e)=> 
      setQuery(e.target.value.toLowerCase()) 
      } />
   
    </div>
    </form>
   
   </>
  )
}
