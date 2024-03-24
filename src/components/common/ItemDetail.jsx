import React from "react";
import ItemCountContainer from "./itemCount/ItemCountContainer";
import { Card, Box, CardActionArea, CardActions, CardContent, CardMedia, Typography, Alert } from "@mui/material";

export const ItemDetail = ({ item, onAdd, initial}) => {
  return (
    <>
      <div className="p-5 ">
        <Card sx={{ display: 'flex' }} className="p-3">
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5">
                {item.title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                <strong>Descripción:</strong> <span>{item.description}</span>
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                <strong>Precio:</strong><span className="">${item.price}.00</span>
              </Typography>
              {
                initial &&
                <Alert severity="info">  Ya tienes {initial} articulos en el carrito.</Alert>
              }
            </CardContent>
            <CardActions className="btn-card">
              <ItemCountContainer stock={item.stock} onAdd={onAdd} initial={initial} />
            </CardActions>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 350 }}
            image={item.image}
            alt="Live from space album cover"
          />
        </Card>
      </div>
    </>
  );
};
