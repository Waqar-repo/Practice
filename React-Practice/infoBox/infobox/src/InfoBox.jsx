import './App.css'
const InfoBox = ({children,gameText}) =>{
console.log(children);
  return (
    <>
    <div className='Infobox'>
      <h1>{gameText}</h1>
{children}
    </div>
    
    </>
  )
}

export default InfoBox