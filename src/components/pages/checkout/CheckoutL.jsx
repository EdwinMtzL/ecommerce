import { Alert } from '@mui/material';
import React from 'react'
import { Link } from "react-router-dom";
import { Box, Button, TextField } from "@mui/material"
import { useFormik } from 'formik';
import  * as Yup from 'yup';


export const CheckoutL = ( { sendingData,captureInfo, orderId }) => {

    const { handleSubmit , handleChange, errors } = useFormik({
        initialValues: {
            name: "",
            phone:"",
            email:"",
        },
        onSubmit: ( data ) => {
            console.log(data);
        },
        validationSchema:Yup.object({
            email: Yup.string()
            .email("Debes ingresar un email valido")
            .required("Campo requerido"),
        }) ,
        validateOnChange: false,
      })

    return (
      <div className='p-5'> 
        { 
            orderId ? 
            ( 
                <div className='d-flex flex-column align-items-lg-center'>
                    <img width="250" height="250" src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjNrNzRzdjFwZzlzZmE3ejM5ZGwwcms4ZjFlbW0zeHB3aHN2OWU2ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WyZ1D8gXF7QQsRkXw5/giphy.gif"  alt="" srcset="" />
                    <p> Gracias por tu compra </p> 
                    <p> Folio de tu compra: </p>  <strong>{orderId}</strong>
                    <Link to="/">
                        <Button variant="contained">Seguir comprando</Button>
                    </Link>
                </div>
            )
            :
            (
                <form onSubmit={ sendingData }>
                    <div>
                    <Alert severity="info"> 
                        Ingresa tus datos para poder finalizartu pedido </Alert>
                        <input type="text" name="name" className="form-control m-2" id="floatingInput" placeholder="Ingresa tu nombre"  onChange={captureInfo} />
                        <input type="text" name="phone" className="form-control m-2" id="phone" placeholder='Ingresa tu telefono' onChange={captureInfo} />
                        <input type="text" name="email" className="form-control m-2" id="email" placeholder='Ingresa tu email' onChange={captureInfo} />            
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
  