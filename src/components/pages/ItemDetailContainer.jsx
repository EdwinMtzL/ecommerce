import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../common/ItemDetail'
import { getProduct } from '../../productsMock'
import { CardContext } from '../../context/CardContext'
import { CardSkeleton } from '../common/CardSkeleton'

import { db } from '../../firebaseConfig'
import { collection, doc, getDoc } from "firebase/firestore";

export const ItemDetailContainer = () => {

    const { id } = useParams()

    const [item , setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const {addToCart ,getTotalQuantityById} = useContext( CardContext );

    const initial = getTotalQuantityById(id)

    useEffect(() => {

      setIsLoading(true)
      let productsCollection = collection(db, "products");
      let refDoc = doc( productsCollection, id )
      getDoc( refDoc ).then( res => {
        setItem({ ...res.data() , id: res.id })
      }).finally(() => setIsLoading(false))
      
    },[id])

    const onAdd = (cantidad)=>{
      let infoProducto ={
         ...item,
        quantity:cantidad
      }
      addToCart( infoProducto )
    }

    if( isLoading ){
      return  (
      <div className="d-flex">
        {/* { category ? ( 
          <>
            <CardSkeleton/>
            <CardSkeleton/>
            <CardSkeleton/>
            <CardSkeleton/>
          </>
        ) : ( */}
          <>
            <CardSkeleton/>
            <CardSkeleton/>
            <CardSkeleton/>
            <CardSkeleton/>
          </>
  
        {/* )} */}
      </div>
      );
    }

  return (
    <> <ItemDetail item={item} onAdd={onAdd} initial={initial} />  </>
  )
}
