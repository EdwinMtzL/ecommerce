import { createContext, useState } from "react"


export const CardContext = createContext();

const CardContextProvaider = ( {children} ) => {

    const [cart , setCart] = useState([]);

    const addToCart = ( product ) => {
      let existe = isInCart(product.id)

      if( existe ){
        
        let newArray = cart.map( (elemento) => {
          if(elemento.id === product.id){
            return {
              ...elemento,
              quantity :  product.quantity
            };
          }else{
            return elemento
          }
        } );

        setCart(newArray)

      }else{
        setCart( [...cart, product] )
      }
    } 

    const clearCard = () => {
      setCart([])
    }

    const isInCart = (id) => {
      let existe = cart.some( ( elemento ) =>  elemento.id === id  );
      return existe
    }

    const removeById = ( id ) =>{
      let newArray = cart.filter( (elemento) =>  elemento.id !== id )
      setCart(newArray)
    }

    const getoTotalItems =() => {
      
      let items = cart.reduce( ( acc, element ) => { 
        return acc + element.quantity
       }, 0 )

       return items

    }

    const getTotalPrice = () => {
      let total = cart.reduce( ( acc , element ) => {
        return acc + (element.price * element.quantity)
      }, 0 )
      return total
    }

    const getTotalQuantityById = (id) => {
      let product = cart.find( ( element ) =>  element.id === id )

        if(product){
          return product.quantity
        }else{
          return product
        }
    }

    let data ={
        cart,
        addToCart,
        clearCard,
        removeById,
        getoTotalItems,
        getTotalPrice,
        getTotalQuantityById
    }

  return <CardContext.Provider value={ data }>

    {children}

  </CardContext.Provider>
}

export default CardContextProvaider