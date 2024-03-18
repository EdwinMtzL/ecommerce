import React, { useState } from 'react'

const Counter =()=> {

const [ counter, setCounter ] = useState(1);  //[Variable, funcion]
//console.log(X[0]); //[Variable, funcion]

const sumar = ()=>{
    setCounter( counter + 1 )
}

const resta = ()=>{
    setCounter( counter - 1 )
}


  return (
    <div>
        <button onClick={resta}>-</button> 
        <h4>{counter}</h4>
        <button onClick={sumar}>+</button>
    </div>
  )
}

export default Counter