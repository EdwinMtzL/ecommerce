import { createContext, useState } from "react"


export const CardContext = createContext();

const CardContextProvaider = ( {children} ) => {

    const [cart , setCart] = useState([]);

    const addToCart = ( product ) => {
      console.log('j', product);

      let existe = isInCart(product.id)

      if( existe ){
        
        let newArray = cart.map( (elemento) => {
          if(elemento.id === product.id){
            return {
              ...elemento, quantity : elemento.quantity + product.quantity
            }
          }else{
            return elemento
          }
        } )

        setCart(newArray)

      }else{
        setCart( [...cart, product] )
      }
    } 

    const clearCard = () => {
      setCart([])
    }

    const isInCart = (id) => {
      let existe = cart.some( ( elemento ) => { elemento.id === id } );
      return existe
    }

    const removeById = ( id ) =>{
      let newArray = cart.filter( (elemento) =>  elemento.id !== id )
      setCart(newArray)
    }

    let data ={
        cart,
        addToCart,
        clearCard,
        removeById
    }

  return <CardContext.Provider value={ data }>

    {children}

  </CardContext.Provider>
}

export default CardContextProvaider