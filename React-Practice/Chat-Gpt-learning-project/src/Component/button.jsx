
const Button = ({likeUnlike,clickHandler,Count,children}) =>{
  return (
    
    <>
    <button onClick={clickHandler}>{children}
  </button>
  <p>{Count}</p>
  </>
  )
}
export default Button