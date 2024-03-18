import { useCount } from "../../../hooks/useCunt";


const ItemCount = ( { onAdd, suma, resta, counter}) => {

  // const { count, increment, decrement } = useCount()

  return (
    <div className="d-flex">
      <button onClick={resta}>-</button>
      <span>{counter}</span>
      <button onClick={suma}>+</button>
      <button className="btn btn-info me-3" onClick={ () => onAdd(counter) }>Agregar carrito</button>

    </div>
  );
};

export default ItemCount;
