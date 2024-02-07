import React, { useState } from "react";
import ItemCount from "./ItemCount";

const ItemCountContainer = ({ stock }) => {
  const [counter, setCounter] = useState(1);

  const addOne = () => {
    if (counter < stock) {
        setCounter(counter +1)
    }
  };

  const subOne = () => {
    if (counter > 1) {
        setCounter(counter - 1)
    }
  };

  return <ItemCount addOne={addOne} subOne={subOne} counter={counter}/>;
};

export default ItemCountContainer;
