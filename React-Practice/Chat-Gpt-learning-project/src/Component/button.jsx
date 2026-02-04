
const Button = ({likeUnlike,clickHandler,totalCount}) =>{
  return (
    
    <>
    <button onClick={clickHandler}>{likeUnlike === true ? 'Unlike' : ' like'}
  </button>
  <p>{totalCount}</p>
  </>
  )
}
export default Button