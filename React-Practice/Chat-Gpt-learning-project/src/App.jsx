import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Component/button'

function App() {
  const [activeMood,setIsActiveMood] = useState('')
  const [count,setCount] = useState(0)
 
const handleMood = (mood) => {
  setIsActiveMood(mood)
  setCount(count+1)
}
  
  return (
    <>
      <Button clickHandler={()=> {handleMood('happy')}} isActive={activeMood ==='happy'} >
        Happy
      </Button>

      <Button clickHandler={()=> handleMood('sad')} isActive={activeMood === 'sad'}  > 
     Sad
      </Button>
      
      <Button clickHandler={()=> handleMood('neutral')} isActive={activeMood === 'neutral'} > 
       Neutral
      </Button>
   
      <Button clickHandler={()=> {
        handleMood('')
         setCount(0)}} 
         isActive={activeMood === false}> 
       Reset
      </Button>
    
     
      
        
    </>
  )
}

export default App
