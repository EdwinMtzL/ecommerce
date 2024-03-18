import React, { useState } from "react";
import ItemCount from "./ItemCount";

const ItemCountContainer = ({ stock , onAdd , initial =1 }) => {
  const [counter, setCounter] = useState(initial);

  const suma = () => {
    if (counter < stock) {
        setCounter(counter +1)
    }
  };

  const resta = () => {
    if (counter > 1) {
        setCounter(counter - 1)
    }
  };

  return <ItemCount suma={suma} resta={resta} counter={counter} onAdd={onAdd} />;
};

export default ItemCountContainer;
