import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Component/button'

function App() {
  const [happyCount,setCountHappy] = useState(0)
const [unhappyCount,setCountUnhappy]= useState(0)
const [neutralCount,setCountNeutral]= useState(0)
const [happy,sethappy]= useState(false)
const [sad,setSad]= useState(false)
const [neutral,setNeutral]= useState(false)


  function handlerHappy () {
    
sethappy(!happy)
  setCountHappy(happyCount+1)

  
  }

    function handlerSad () {
  
      setSad(!sad)

  setCountUnhappy(unhappyCount+1)
  
  }

    function handlerneutral () {
  
      setNeutral(!neutral)

  setCountNeutral(neutralCount+1)
  
  }



  function reset(){
  setCountNeutral(0)
    setCountUnhappy(0)
      setCountHappy(0)
  }

  return (
    <>
      <Button clickHandler={handlerHappy} Count={happyCount} likeUnlike={happy} >
        Happy
      </Button>

      <Button clickHandler={handlerSad} Count={unhappyCount} likeUnlike={sad}> 
        Sad
      </Button>
      <Button clickHandler={handlerneutral} Count={neutralCount} likeUnlike={neutral}> 
        Neutral
      </Button>
      <Button clickHandler={reset}> 
        Reset
      </Button>
      
        
    </>
  )
}

export default App
