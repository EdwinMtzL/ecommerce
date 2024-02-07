import ProductCard from "../../common/ProductCard";
import "bootstrap";
import { ItemList } from "./ItemList";
import { useEffect, useState } from "react";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const [nombre, setNombre] = useState("Soy edd");

  const saludar = () => {
    setNombre("Papu");
  };

  console.log("Peticion fuera del effect");

  // useEffect(() => {
  //   console.log('Se ejecuta dentro');

  // }, [])//Array de dependencas

  useEffect(() => {
    console.log("Se ejecuta dentro");
  }, []); //Array de dependencas

  return <ItemList nombre={nombre} saludar={saludar} />;
};

export default ItemListContainer;
