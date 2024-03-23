
import React from 'react'
import ProductCard from '../../common/ProductCard';
// import { AgregarDocs } from '../../../AgregarDocs';

export const ItemList = ({ items }) => {

  return (
    <>
      <div className='row row-cols-1 row-cols-md-2 g-4'>
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
