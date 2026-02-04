import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Component/button'

function App() {
  const [count,setCount] = useState(0)
const [likeOrNot,setLikeOtNot]= useState(false)
  function handler () {
    


  setLikeOtNot(!likeOrNot)
  setCount(count+1)
  



  }

  return (
    <>
      <Button clickHandler={handler} totalCount={count} likeUnlike={likeOrNot}/>
      
        
    </>
  )
}

export default App
