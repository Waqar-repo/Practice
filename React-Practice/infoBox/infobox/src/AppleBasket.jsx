const Applebasket = ({ appleCount, backetName }) => {
  
  return (
    <div className="apple-basket">
      <h1>
        <span>{appleCount}</span> Apple
      </h1>
      <p>{backetName}</p>
    </div>
  );
};
export default Applebasket;