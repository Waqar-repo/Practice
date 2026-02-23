import React, { useEffect, useState } from 'react';
import BooksCard from './BooksCard';
import LoadingCard from './Loading';

export default function BooksContainer() { 
  // userSearch || 
  const [books,setbooks] = useState([])
  const [loading,setloading] = useState(true)
  
  useEffect(() => {
    const searchTerm = 'subject:thriller'
    
      try {
        fetch(
          `https://openlibrary.org/search.json?q=${searchTerm}&limit=12`,
        ).then((res)=> res.json())
        .then((data)=>{
          // console.log(data.docs)
          setbooks(data.docs)
          setloading(false)
       
        })
        
      } catch (error) {
        console.log('failed');
      }
   
  },[]);
if(loading){
  
  return (
  <div className='container'>
{
  [...Array(8)].map((_,index)=>{
  return <LoadingCard key={index} />
  })

}
  </div>

  
)

}
  return(
  <>
<div className='container'>

  {
books.map((book)=>{
  // console.log(book.cover_i)
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
