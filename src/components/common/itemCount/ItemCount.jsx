const ItemCount = ({addOne,subOne, counter}) => {
  return (
    <div>
      <button onClick={subOne} disabled={counter === 1 ? true : false } >-</button>
      <h4>{counter}</h4>
      <button onClick={addOne}>+</button>
      <button>Agregar carrito</button>

    </div>
  );
};

export default ItemCount;
