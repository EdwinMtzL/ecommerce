import { useContext } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { CardContext } from "../../context/CardContext";


export const CartWidget = () => {
  
  const { getoTotalItems } = useContext( CardContext );

  let total = getoTotalItems();
  
  return (
    <div>
    <CiShoppingCart />
    <span> { total } </span> 
  </div>
  )
}
