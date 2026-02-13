import { useEffect,useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Button from './Component/button';

function App() {
  const [activeMood, setIsActiveMood] = useState('');
  const [count, setCount] = useState(0);
  const [isMaxCount, setMaxCount] = useState(false)


  const handleMood = (mood) => {
    setIsActiveMood(mood);
    return mood
  };
useEffect(()=>{
if(count >= 5){
  // setIsActiveMood('')
  setMaxCount(true)
  
} else{
  setMaxCount(false)
}
},[count])
  return (
    <>
      <Button
      maxCountText = {isMaxCount}
          clickHandler={() => {
            
            
            if(activeMood === 'happy'){
              setCount(count + 1);
             
              
              
            } else{
              setCount(0)
              handleMood('happy');
            }
          
          }}
          isActive={activeMood === 'happy'}
        counter={count}
        
      >
        Happy
      </Button>

      <Button
      maxCountText = {isMaxCount}
        clickHandler={() => {
          
          if(activeMood === 'sad'){
            setCount(count + 1);
         
            
          } else{
            handleMood('sad');
            setCount(0)
          }
       
        }}
        isActive={activeMood === 'sad'}
        counter={count}
        
      >
        Sad
      </Button>

      <Button
      maxCountText = {isMaxCount}
        clickHandler={() => {
         
          
          if(activeMood === 'neutral'){
            setCount(count + 1);
            
            
            
          } else{
            handleMood('neutral');
            setCount(0)
          }
        }}
        isActive={activeMood === 'neutral'}
        counter={count}
        
      >
        Neutral
      </Button>

      <Button
        clickHandler={() => {
          handleMood('');
       
          setCount(0);
        
        }}
        isActive={activeMood === false}
      >
        Reset
      </Button>
    </>
  );
}

export default App;
