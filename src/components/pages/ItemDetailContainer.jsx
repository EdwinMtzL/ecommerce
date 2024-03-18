import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../common/ItemDetail'
import { getProduct } from '../../productsMock'
import { CardContext } from '../../context/CardContext'
import ItemCount from '../common/itemCount/ItemCount'

export const ItemDetailContainer = () => {

    const { id } = useParams()

    const [item , setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const {addToCart} = useContext( CardContext );

    useEffect(()=>{
       getProduct(+id).then( resp => {
        setItem(resp);
        setIsLoading(false)
       });
    },[id])

    const onAdd = (cantidad)=>{
      let infoProducto ={
         ...item,
        quantity:cantidad
      }
      console.log( infoProducto );
      addToCart( infoProducto )
    }

  return (
    <>
        {
          isLoading ?  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" /> :  
          <ItemDetail {...item} onAdd={onAdd} />
        } 
    </>
  )
}
