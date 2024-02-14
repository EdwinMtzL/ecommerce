import ProductCard from "../../common/ProductCard";
import "bootstrap";
import { ItemList } from "./ItemList";
import { useEffect, useState } from "react";
import { products } from "../../../productsMock";

const ItemListContainer = () => {

  const[ items, setItems ] = useState([]);

  useEffect(()=>{
    // CREAMOS O SOLICITAMOS
      const tarea = new Promise( (resolve, reject) => {
        resolve( products );
        reject('Error algo salio mal');
      });
    
      // MANIPULAMOS
      tarea
      .then( (res)=>{
        setItems(res);
      })
      .catch( (error)=>{
        console.log(error);
      })
  },[]);

  return (
    <>
      <ItemList items={items} /> 
    </>
  )
};

export default ItemListContainer;
