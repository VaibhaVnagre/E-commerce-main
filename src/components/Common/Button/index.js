import React from 'react'
import "./style.css";
const Button = ({name ,outlined , onclick}) => {

  return (
    <div className='buttonDiv'>
        <button onClick={()=>(onclick())} className={outlined ? "outLined" : "button"}>{name}</button>
    </div>
  )
}

export default Button