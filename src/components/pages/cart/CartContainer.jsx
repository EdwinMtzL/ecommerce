import React, { useContext } from 'react'
import { CardContext } from '../../../context/CardContext';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const CartContainer = () => {
    const { cart , clearCard, removeById, getTotalPrice } = useContext( CardContext );

    let total = getTotalPrice();

    const clearAlert= () => {

      Swal.fire({
        title: "¿Desea eliminar su carrito",
        showCancelButton: false,
        showDenyButton: true,
        confirmButtonText: "Confirmar",
        denyButtonText: `Cancelar`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          clearCard();
          Swal.fire("Elimanado", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Tu carrito queda con tus articulos", "", "info");
        }
      });
    }

    return (
      <div>
        <div className='col-6'>
          <h2 className='pb-3'>Carrito</h2>
          {
            cart.map( ( product ) => 
            <div key={ product.id } className='card pb-3'> 
            <img src={product.image} alt={product.title}  />
              <h3> <strong>Articulo: </strong> {product.title} </h3> 
              <p> <strong>Cantidad : </strong>{product.quantity} </p>
              <p> <strong>Precio :</strong> ${product.price}.00 c/u </p>
              <p> <strong>Total :</strong> ${product.price}.00 </p>
              <button className='btn btn-danger' onClick={ () => { removeById(product.id) } }>Eliminar</button>
            </div> )
          }
        </div>
        <div className='col-6'>
          <h3>Total a pagar es: {total} </h3>
          <Link to="/checkout">
          </Link>
          {
            cart.length > 0 ? (
              <div>
                <button onClick={clearAlert} className='btn btn-danger me-3'>Limpiar carrito</button>
                <Link to="/checkout">
                  <button className='btn btn-success'>Terminar compra</button>
                </Link>
              </div>
            ):(
              <Link to="/">
                <button className='btn btn-success'>Agregar productos</button>
              </Link>
            )
          }
        </div>

      </div>
    )
  
}

export default CartContainer
