import { Box, Button, TextField } from "@mui/material"

export const FormFormik = () => {
  return (
    <div style={{ padding:"40px", display:"flex", justifyContent:"center" }}>
        <form action=""
            style={{
                display: "flex",
                flexDirection:"column",
                width:"50%",
                gap: "20px"
            }}>
        <TextField
          id="standard-multiline-flexible"
          label="Nombre"
          multiline
          variant="standard"
        />
        <TextField
          id="standard-textarea"
          label="Email"
          multiline
          variant="standard"
        />
        <TextField
          id="standard-multiline-static"
          label="Contraseña"
          multiline
          variant="standard"
        />
         <TextField
          id="standard-multiline-static"
          label="Confirmar contraseña"
          multiline
          variant="standard"
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
