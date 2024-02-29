const ItemCount = ({addOne,subOne, counter}) => {
  return (
    <div className="d-flex">
      <button onClick={subOne} className="btn btn-primary me-3" disabled={counter === 1 ? true : false } >-</button>
      <h4>{counter}</h4>
      <button className="btn btn-primary ms-3 me-3" onClick={addOne}>+</button>
      <button className="btn btn-info me-3">Agregar carrito</button>

    </div>
  );
};

export default ItemCount;
