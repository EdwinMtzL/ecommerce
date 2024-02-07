
import React from 'react'

export const ItemList = ({nombre, saludar}) => {
  return (
    <div>
      <div>Hola, {nombre} </div>
      <button onClick={saludar}>Saludar</button>
    </div>
  )
}
