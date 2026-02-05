import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Button from './Component/button';

function App() {
  const [activeMood, setIsActiveMood] = useState('');
  const [countHappy, setCountHappy] = useState(0);
  const [countSad, setCountSad] = useState(0);
  const [countNeutral, setCountNeutral] = useState(0);

  const handleMood = (mood) => {
    setIsActiveMood(mood);
  };

  return (
    <>
      <Button
        clickHandler={() => {
          handleMood('happy');
          setCountHappy(countHappy + 1);
        }}
        isActive={activeMood === 'happy'}
        counter={countHappy}
      >
        Happy
      </Button>

      <Button
        clickHandler={() => {
          handleMood('sad');
          setCountSad(countSad + 1);
        }}
        isActive={activeMood === 'sad'}
        counter={countSad}
      >
        Sad
      </Button>

      <Button
        clickHandler={() => {
          handleMood('neutral');
          setCountNeutral(countNeutral + 1);
        }}
        isActive={activeMood === 'neutral'}
        counter={countNeutral}
      >
        Neutral
      </Button>

      <Button
        clickHandler={() => {
          handleMood('');
          setCountHappy(0);
          setCountSad(0);
          setCountNeutral(0);
        }}
        isActive={activeMood === false}
      >
        Reset
      </Button>
    </>
  );
}

export default App;
