import React from 'react'
import { Link } from "react-router-dom";

export const CheckoutL = ( { sendingData,captureInfo, orderId }) => {
    return (
      <div> 
        { 
            orderId ? 
            ( 
                <div>
                    <p> Gracias por tu compra {orderId} </p> 
                    <Link to="/">
                        <button className="btn btn-primary">Seguir comprando</button>
                    </Link>
                </div>
            )
            :
            (
                <form onSubmit={ sendingData }>
                    <div>
                        <input type="text" name="name" className="form-control" id="floatingInput" placeholder="Ingresa tu nombre"  onChange={captureInfo} />
                        <input type="text" name="phone" className="form-control" id="phone" placeholder='Ingresa tu telefono' onChange={captureInfo} />
                        <input type="text" name="email" className="form-control" id="email" placeholder='Ingresa tu email' onChange={captureInfo} />            
                    </div>
                    <div>
                        <button className='btn btn-primary' >Enviar</button>
                    </div>
                </form>
            )
         }
      </div>
    )
  }
  