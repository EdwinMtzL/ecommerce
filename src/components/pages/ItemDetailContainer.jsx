import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../common/ItemDetail'
import { getProduct } from '../../productsMock'

export const ItemDetailContainer = () => {

    const { id } = useParams()

    const [item , setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
       getProduct(id)
       .then(resp=>{
        setItem(resp);
        setIsLoading(false)
       })
    },[])

  return (
    <>
        {isLoading ?  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" /> :  item && <ItemDetail {...item}/> } 
    </>
  )
}
