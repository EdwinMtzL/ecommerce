import React, { useState } from "react";
import ItemCount from "./ItemCount";
import Swal from 'sweetalert2'

const ItemCountContainer = ({ stock , onAdd, initial=1  }) => {
  
  const [counter, setCounter] = useState( initial );

  const suma = () => {
    if (counter < stock) {
        setCounter(counter + 1)
    }else {
 
      Swal.fire({
        icon: "warning",
        title: "Opps...",
        text: "Número máximo de elementos disponibles"
      });
    }
  };

  const resta = () => {
    if (counter > 1) {
        setCounter(counter - 1)
    }else{  
      console.log('poner alerta');
    }
  };

  return <ItemCount suma={suma} resta={resta} counter={counter} onAdd={onAdd} />;
};

export default ItemCountContainer;
