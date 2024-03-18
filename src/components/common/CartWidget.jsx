import { useContext } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { CardContext } from "../../context/CardContext";


export const CartWidget = () => {
  
  const { cart } = useContext( CardContext );
  
  return (
    <div>
    <CiShoppingCart />
    <span> {cart.length} </span> 
  </div>
  )
}
