import { Fab, Button } from "@mui/material";
import { GoPlus } from "react-icons/go";
import { GrFormSubtract } from "react-icons/gr";
import { CiShoppingCart } from "react-icons/ci";

const ItemCount = ( { onAdd, suma, resta, counter}) => {

  // const { count, increment, decrement } = useCount()

  return (
    <div className="d-flex justify-content-between w-100">
      <div className="content-add d-flex align-items-center">
        <Fab color="primary" aria-label="add" onClick={suma}>
          <GoPlus />
        </Fab>
        <h3 className="me-3 ms-3">{counter}</h3>
        <Fab color="error" aria-label="add" onClick={resta}>
          <GrFormSubtract />
        </Fab>
      </div>
      <Button 
          variant="outlined" 
          startIcon={<CiShoppingCart />}  
          onClick={ () => onAdd(counter) }>
        Agregar al carrito
    </Button>
    </div>
  );
};

export default ItemCount;
