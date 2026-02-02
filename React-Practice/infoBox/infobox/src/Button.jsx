const Button = ({ imageUrl, altText, clickHandler,children}) => {
    
  return (
    <button title={children} onClick={clickHandler}>
{children}
      <img src={imageUrl} alt={children} />
    </button>
  );
};

export default Button;