import { useCount } from "../../../hooks/useCunt"

export const Count2 = () => {

  const {  count,increment,decrement,reset } = useCount(0)

  return (
    <div>
        <h3>Count 2</h3>
        <p> {count} </p>
        <button onClick={increment}>+</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>-</button>
    </div>
  )
}
