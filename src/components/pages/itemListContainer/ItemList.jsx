
import React from 'react'
import ProductCard from '../../common/ProductCard';

export const ItemList = ({ items }) => {
  console.log(items);

  return (
    <>
      <div>
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
