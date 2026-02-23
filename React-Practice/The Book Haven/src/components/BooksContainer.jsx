import React, { useEffect, useState } from 'react';
import BooksCard from './BooksCard';

export default function BooksContainer() { 
  // userSearch || 
  const [books,setbooks] = useState([])
  
  useEffect(() => {
    const searchTerm = 'subject:thriller'
    
      try {
        fetch(
          `https://openlibrary.org/search.json?q=${searchTerm}&limit=12`,
        ).then((res)=> res.json())
        .then((data)=>{
          // console.log(data.docs)
          setbooks(data.docs)
       
        })
        
      } catch (error) {
        console.log('failed');
      }
   
  },[]);
console.log(books)
  return(
  <>
<div className='container'>

  {
books.map((book)=>{
  console.log(book.cover_i)
const imageUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
  return (

    <BooksCard
    title={book.title}
    author={book.author_name?.[0] || 'Unknown'}
    key={book.cover_i}
    image={imageUrl} />
    
  )
})
  }
</div>
   

  </>
  )
}
