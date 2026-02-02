import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

import InfoBox from './InfoBox'
import AppleCounter from './AppleCounter'
function App() {
  return (
   <>
  <InfoBox gameText=' Apple Basket Game '>
<AppleCounter appleValue={10}/>

    </InfoBox >
    <InfoBox gameText=' Apple Basket Game 2 '>
<AppleCounter appleValue={8} />
    </InfoBox>
    </>
  )
}

export default App
