import { Box, Button, TextField } from "@mui/material"
import { useFormik } from 'formik';
import  * as Yup from 'yup';


export const FormFormik = () => {

  const { handleSubmit , handleChange, errors } = useFormik({
    initialValues: {
        name: "",
        email:"",
        password:"",
        changePassword:""
    },
    onSubmit: ( data ) => {
        console.log(data);
    },
    validationSchema:Yup.object({
        email: Yup.string()
        .email("Debes ingresar un email valido")
        .required("Campo requerido"),

        password: Yup.string()
        .required("Campo requerido")
        .matches(/^(?=.*[0-9])(?=.*[A-Z]).{7,}$/ , "Debe tener una mayuscula, un número y minimo de 7 caracteres" ),

        changePassword: Yup.string()
        .required("Campo requerido")
        .oneOf( [Yup.ref("password")] , "Las constraseñas no coinciden" ),
    }) ,
    validateOnChange: false,
  })

  console.log(errors);

  return (
    <div style={{ padding:"40px", display:"flex", justifyContent:"center" }}>
        <form 
            onSubmit={ handleSubmit }
            style={{
                display: "flex",
                flexDirection:"column",
                width:"50%",
                gap: "20px"
            }}
            >
        <TextField
          label="Nombre"
          multiline
          name="name"
          variant="standard"
          onChange={handleChange}
        />
        <TextField
          error={errors.email ? true : false }  
          label="Email"
          multiline
          name="email"
          variant="standard"
          onChange={handleChange}
          helperText={ errors.email  }
        />
        <TextField
          error={errors.password ? true : false }  
          label="Contraseña"
          multiline
          name="password"
          variant="standard"
          onChange={handleChange}
          helperText={ errors.password  }

        />
         <TextField
          error={errors.changePassword ? true : false }  
          label="Confirmar contraseña"
          multiline
          name="changePassword"
          variant="standard"
          onChange={handleChange}
          helperText={ errors.changePassword  }
        />
        <Box sx={{ width: "100%", display:"flex", justifyContent:"flex-end" }}>
            <Button type="submit" variant="contained" sx={{width:200}}>
                Enviar
            </Button>
        </Box>
        </form>
    </div>
  )
}
