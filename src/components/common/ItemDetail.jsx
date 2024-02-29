import React from "react";
import ItemCountContainer from "./itemCount/ItemCountContainer";

export const ItemDetail = ({ img, title, description, price }) => {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card p-3">
            {/* <img className="" src={img} alt="" /> */}
            <div className="">
              <h2 className="">{title}</h2>
            </div>
            <p className=""><strong>Descripción:</strong> <span>{description}</span></p>
            <p className="">
              <strong>Precio:</strong>
              <span className="">${price}.00</span>
            </p>
            <ItemCountContainer />
          </div>
        </div>
      </div>
    </>
  );
};
