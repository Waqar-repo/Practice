import Button from './Button';
import Applebasket from './AppleBasket';


import { useState,Fragment } from 'react';

import LeftArrow from './assets/left-arrow.png';
import RightArrow from './assets/right-arrow.png';

// let rightApple = 0;
// console.log(Fragment);
const AppleCounter = ({appleValue}) => {
  const totalApple = appleValue;
  
console.log(appleValue);
  const [rightApple, setRightAppleCount] = useState(0);
  const [leftApple, setLeftAppleCount] = useState(totalApple);

  const leftArrowHandler = () => {
    if (rightApple > 0) {
      setLeftAppleCount(leftApple + 1);
      setRightAppleCount(rightApple - 1);
    }
  };

  const rightArrowHandler = () => {
    if (leftApple > 0) {
      setLeftAppleCount(leftApple - 1);
      setRightAppleCount(rightApple + 1);
    }
  };

  return (
    <>
    <section>
      <Applebasket appleCount={leftApple} backetName="Basket 1" />
      <Button imageUrl={LeftArrow}
       titleText={'Left Arrow'}
        // children={'Left Arrow'}
        clickHandler={leftArrowHandler}>
         
          Left Arrow 
           </Button>
      <Button
        imageUrl={RightArrow}
        titleText={'Right Arrow'}
        children={'Right Arrow'}
        clickHandler={rightArrowHandler}/> 


      
      <Applebasket appleCount={rightApple} backetName="Basket 2" />
    </section>
    </>
  );
};
export default AppleCounter;