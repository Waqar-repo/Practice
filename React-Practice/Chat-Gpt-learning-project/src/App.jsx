import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Component/button'

function App() {
  const [likeCount,setCount] = useState(0)
const [unlikeCount,setUnlikeCount]= useState(0)
const [like,setLike]= useState(false)
const [unlike,setLikeUnlike]= useState(false)

  function handlerLike () {
    
setLike(!like)
  setCount(likeCount+1)

  
  }

    function handlerUnike () {
  
      setLikeUnlike(!unlike)

  setUnlikeCount(unlikeCount+1)
  
  }
  function reset(){
setCount(0)
setUnlikeCount(0)
  }

  return (
    <>
      <Button clickHandler={handlerLike} Count={likeCount} likeUnlike={like} >
        like
      </Button>

      <Button clickHandler={handlerUnike} Count={unlikeCount} likeUnlike={unlike}> 
        unlike
      </Button>
      <Button clickHandler={reset}> 
        Reset
      </Button>
      
        
    </>
  )
}

export default App
