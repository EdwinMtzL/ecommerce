import "bootstrap";
import { ItemList } from "./ItemList";
import { useState, useEffect } from "react";
import { getProducts } from "../../../productsMock";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { category } = useParams();
  const[ products, setProducts ] = useState([]);
  const [isLoading, setIsloading] = useState(true)

  useEffect(()=>{
    setIsloading(true)

    getProducts().then((resp) => {
      // console.log(resp);
      // setItem(resp)
      // setIsloading(false)
      // verificar si existe una categoria
      if(category){
        const productFilter = resp.filter( (product) => product.category === category )
        // Guarda los productos filtrados
        setProducts(productFilter);
      }else{
        // si no tenemos una categoria almacenamos todos los productos
        setProducts(resp)
      }
      setIsloading(false)
    })
  },[category]);




  return (
    <>
     { isLoading ?  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" /> :  <ItemList items={products} /> }
    </>
  )
};

export default ItemListContainer;
