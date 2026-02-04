
const Button = ({likeUnlike,clickHandler,Count,children}) =>{
  return (
    
    <>
    <button onClick={clickHandler} happy={likeUnlike}>{children}
  </button>
  {Count > 0 && <p>You clicked {children} {Count} times</p>}
  </>
  )
}
export default Button