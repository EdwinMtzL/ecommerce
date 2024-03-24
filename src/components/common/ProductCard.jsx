import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import "./Product.css"

export default function ProductCard( {image,id,title,description, price} ) {

    // const {title, description, price} = prop;
  
return (
    <div className="col-lg-4 col-sm-12 items-card">
        <Card sx={{maxWidth:400}}>
            <CardActionArea>
                <CardMedia 
                    component="img"
                    height="450"
                    width="200"
                    image={image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title} 
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <strong>Descripción:</strong> {description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className="mt-2">
                        <strong>Precio: </strong> ${price}.00 
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className="btn-card">
            <Link to={`/item/${id}`}>
                <button className="btn btn-primary">Detalle</button>
            </Link>
            </CardActions>
        </Card>
    </div>
  )
}
