import { Children } from 'react'
import styles from '../Component/Button.module.css'
const Button = ({isActive,clickHandler,children,counter,maxCountText}) =>{
  return (
    
    <>
   <button onClick={clickHandler} className={isActive ? styles.active: styles.button}>{children}
    
  </button>
  {isActive && <p> Selected Mood: {children} {counter}</p>}
{maxCountText && isActive ? <p>You have been more than 5 times {children}</p> : null}
  </>
  )
}
export default Button