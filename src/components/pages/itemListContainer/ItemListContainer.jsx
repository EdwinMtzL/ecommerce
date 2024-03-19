import "bootstrap";
import { ItemList } from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CardSkeleton } from "../../common/CardSkeleton";
import { db } from "../../../firebaseConfig";
import { collection, getDocs,query , where } from "firebase/firestore";

const ItemListContainer = () => {
  const { category } = useParams();
  const[ products, setProducts ] = useState([]);
  const [isLoading, setIsloading] = useState(true)

  useEffect(()=>{

    let productsCollection = collection(db, "products");
    
    let consulta = productsCollection ;

    if(category){
      let productsCollectionFiltered = query( 
        productsCollection, 
        where( "category" , "==" , category) 
      )
      consulta = productsCollectionFiltered
    }

    getDocs( consulta )
    .then( resp => {
      let arrayNew = resp.docs
      .map( (element) => {
          return { ...element.data(), id: element.id }
      });
      setProducts(arrayNew);
    } ).finally( () => setIsloading(false) )

  },[category]);

  //if con return temprano 
  if( isLoading ){
    return  (
    <div className="d-flex">
      { category ? ( 
        <>
          <CardSkeleton/>
          <CardSkeleton/>
          <CardSkeleton/>
          <CardSkeleton/>
        </>
      ) : (
        <>
          <CardSkeleton/>
          <CardSkeleton/>
          <CardSkeleton/>
          <CardSkeleton/>
        </>

      )}
    </div>
    );
  }

  return (
   <>
    <ItemList items={products} />
   </>
  );
};
export default ItemListContainer;
