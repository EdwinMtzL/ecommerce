import { Link } from "react-router-dom";

export default function ProductCard( {image,id,title,description, price} ) {

    // const {title, description, price} = prop;
  
return (
    <div className="col">
        <div className='card mt-4 m-lg-1 p-3' key={id}>
            <img />
            <h2> {title} </h2>
            <img src={image} />
            <p> <strong>Descripción:</strong> {description} </p>
            <p> <strong>Precio: </strong> ${price}.00 </p>
            <Link to={`/item/${id}`}>
                <button className="btn btn-primary">Detalle</button>
            </Link>
        </div>
    </div>
  )
}
