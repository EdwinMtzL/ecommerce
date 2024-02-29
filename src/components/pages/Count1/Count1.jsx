import React, { useState } from 'react'
import { useCount } from '../../../hooks/useCunt'

export const Count1 = () => {

const { count, increment, decrement, reset } = useCount()

  return (
    <div>
        <h3>Count1</h3>
        <p> {count} </p>
        <button onClick={increment}>+</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>-</button>
    </div>
  )
}
