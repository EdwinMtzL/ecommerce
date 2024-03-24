
import React from 'react'
import ProductCard from '../../common/ProductCard';
// import { AgregarDocs } from '../../../AgregarDocs';

export const ItemList = ({ items }) => {

  return (
    <>
      <div className='row p-3'>
        {/* con este boton se pueden agregar varios elemntos */}
        {/* <AgregarDocs/> */}
          { 
            items.map( ({id, image,price,title,description}) => {
              return (
                <ProductCard key={id} 
                            id={id} 
                            image={image} 
                            price={price} 
                            title={title} 
                            description={description}
                />
              );      
            }) 
          }
      </div>
    </>
  );
}
