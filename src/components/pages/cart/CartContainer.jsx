import React, { useContext } from 'react'
import { CardContext } from '../../../context/CardContext';
import { Link } from 'react-router-dom';

const CartContainer = () => {
    const { cart , clearCard, removeById } = useContext( CardContext );

    return (
      <div>
        <h2 className='pb-3'>Carrito</h2>
        {
          cart.map( ( product ) => <div key={ product.id } className='card pb-3'> 
                                  <h3> <strong>Articulo: </strong> {product.title} </h3> 
                                  <p> <strong>Cantidad : </strong>{product.quantity} </p>
                                  <p> <strong>Precio :</strong> ${product.price}.00 c/u </p>
                                  <p> <strong>Total :</strong> ${product.price * product.quantity}.00 </p>
                                  <button className='btn btn-danger' onClick={ () => { removeById(product.id) } }>Eliminar</button>
                                </div> )
        }
        <button onClick={clearCard} className='btn btn-danger me-3'>Limpiar carrito</button>
        <Link to="/checkout">
          <button className='btn btn-success'>Terminar compra</button>
        </Link>
      </div>
    )
  
}

export default CartContainer
