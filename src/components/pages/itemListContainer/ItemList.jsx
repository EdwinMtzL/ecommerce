
import React from 'react'
import ProductCard from '../../common/ProductCard';

export const ItemList = ({ items }) => {

  return (
    <>
      <div className='row row-cols-1 row-cols-md-2 g-4'>
        
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
