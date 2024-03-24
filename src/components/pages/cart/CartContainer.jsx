import React, { useContext } from 'react'
import { CardContext } from '../../../context/CardContext';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import { CiShoppingCart } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { Card, Avatar, Box, CardContent, CardMedia, Typography, CardActions, Button } from "@mui/material";


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
      <div className='p-3'>
        <h2> <CiShoppingCart className="me-2" /> Carrito</h2> <hr/>
        <div className='d-flex flex-sm-column flex-lg-row'>
          <div className='col-lg-6 col-sm-12 p-5'>
            {
              cart.map( ( product ) => 
              <div className="p-lg-3" key={ product.id }>
              <Card sx={{ display: 'flex' }} className="p-lg-3">
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }} className="flex-row">
                      <Avatar
                        src={product.image}
                        sx={{ width: 77, height: 77 }}
                      />
                      <Typography component="div" variant="h5" className='ms-3'>
                        {product.title}
                      </Typography>
                    </Box>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                      <strong>Cantidad:</strong> <span> {product.quantity}</span>
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                      <strong>Precio:</strong><span className=""> ${product.price}.00</span>
                    </Typography> 
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                      <strong>Total:</strong><span className=""> ${product.price *  product.quantity}.00</span>
                    </Typography>     
                  </CardContent>
                  <CardActions className="btn-card">
                    <Button 
                        color="error" 
                        onClick={ () => { removeById(product.id) } }> 
                    <MdDelete />Eliminar</Button>
                  </CardActions>
                </Box>
              </Card>
              </div>
              )
            }
          </div>
          <div className='col-lg-6 col-sm-12 '>
            <Typography variant="h4" color="text.secondary" component="div">
                <strong>Total a pagar:</strong><span className=""> ${total}.00</span>
              </Typography>
              <hr />
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

      </div>
    )
  
}

export default CartContainer
