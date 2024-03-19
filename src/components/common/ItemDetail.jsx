import React from "react";
import ItemCountContainer from "./itemCount/ItemCountContainer";

export const ItemDetail = ({ item, onAdd, initial}) => {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card p-3">
             <img className="" src={item.image} alt="" /> 
            <div className="">
              <h2 className="">{item.title}</h2>
            </div>
            <p className=""><strong>Descripción:</strong> <span>{item.description}</span></p>
            <p className="">
              <strong>Precio:</strong>
              <span className="">${item.price}.00</span>
            </p>
            <div>
              {
                initial && <p>Ya tienes {initial} articulos en el carrito</p> 
              }
            </div>
            <ItemCountContainer stock={item.stock} onAdd={onAdd} initial={initial} />
          </div>
        </div>
      </div>
    </>
  );
};
