import { createContext, useState } from "react"


// const CardContext = createContext( {chldren} );

const CardContextProvaider = () => {

    const [cart , setCart] = useState([]);

    const addToCart = ()=>{

    }


    let data ={
        cart,
        addToCart
    }

  return <CardContext.Provider value={ data }>

    {chldren}

  </CardContext.Provider>
}

export default CardContextProvaider