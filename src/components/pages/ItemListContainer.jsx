import ProductCard from "../common/ProductCard"
import 'bootstrap';

const ItemListContainer =({saludo}) => {
  return (
    <div className="card">
        {/* <ProductCard titulo={"nike"} desc={"Zapatillas"} price={"4.99"}  />
        <ProductCard titulo={"adidas"} desc={"Zapatillas"} price={"14.99"}  />
        <ProductCard titulo={"pumas"} desc={"Zapatillas"} price={"24.99"}  />
        <ProductCard titulo={"reebook"} desc={"Zapatillas"} price={"34.99"}  /> */}

        <h1>Saludos a {saludo}</h1>
        
    </div>
  )
}

export default ItemListContainer