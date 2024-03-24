import React from 'react'
import { Box, Button, TextField } from "@mui/material"
import { useFormik } from 'formik';
import  * as Yup from 'yup';


export const Checkout = ( { sendingData,captureInfo }) => {



  return (
    <div className='p5'>
        <h2>aca va el checkout</h2>


        <form onSubmit={ sendingData }>
            <div className="form-floating  mb-3">
                <input type="text" name="name" className="form-control" id="floatingInput" placeholder="Ingresa tu nombre"  onChange={captureInfo} />
                <label for="floatingInput">Ingresa tu nombre</label>
            </div>
            <div className="form-floating  mb-3">
                <input type="text" name="phone" className="form-control" id="phone" placeholder='Ingresa tu telefono' onChange={captureInfo} />
                <label for="floatingInput" className="form-label" id="floatingInputLast">Ingresa tu telefono</label>
            </div> 
            <div className="form-floating  mb-3">
                <input type="text" name="email" className="form-control" id="email" placeholder='Ingresa tu email' onChange={captureInfo} />
                <label for="floatingInput" className="form-label" id="floatingInputLast">Ingresa tu telefono</label>
            </div> 
            <div>
                <button className='btn btn-primary' >Enviar</button>
            </div>
        </form>
    </div>
  )
}
