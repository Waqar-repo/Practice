import { Children } from 'react'
import styles from '../Component/Button.module.css'
const Button = ({isActive,clickHandler,children,counter}) =>{
  return (
    
    <>
   <button onClick={clickHandler} className={isActive ? styles.active: styles.button}>{children}
    
  </button>
  {isActive && <p> Selected Mood: {children} {counter}</p>}
 
  </>
  )
}
export default Button