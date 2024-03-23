export const products = [
    {
        title:'JERSEY LOCAL ARSENAL 23/24',
        price: 1799,
        description: 'Dicen que los rayos nunca caen dos veces en el mismo lugar. 20 años después, los Gunners siguen siendo el único club en terminar invicto una temporada en la Premier League',
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/734eda9220a044e5a2e445efbe43b08d_9366/Jersey_local_Arsenal_23-24_Rojo_HR6929_HM1.jpg', 
        stock:11,
        category: 'hombre',
    },
    {
        title:'JERSEY LOCAL FC BAYERN 23/24',
        price: 2799,
        description: 'ste uniforme, el primero en rojo y blanco desde hace 30 años, le da un giro nostálgico y a la vez moderno al look de un equipo famoso por su consistencia futbolística.',
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a1a65259dcb84239b38975ff3a489786_9366/Jersey_Local_FC_Bayern_23-24_Blanco_IJ7442_HM4.jpg', 
        stock:5,
        category: 'hombre',
    },
    {
        title:'JERSEY ARSENAL X ADIDAS BY STELLA MCCARTNEY',
        price: 1799,
        description: 'El jersey del Arsenal x adidas by Stella McCartney te permite mostrar tu amor por el deporte rey con un estilo moderno y de alto rendimiento. Confeccionado en un tejido ligero, con un corte regular y cuello en V, el jersey incorpora paneles de malla para ofrecer un look auténtico fuera de la cancha.',
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c03f7b3fede4457db22053cc1cc7a859_9366/Jersey_Arsenal_x_adidas_by_Stella_McCartney_Azul_IC6239_HM1.jpg', 
        stock:13,
        category: 'mujer',
    },
    {
        title:'JERSEY TERCER UNIFORME FC BAYERN 22/23',
        price: 2700,
        description: 'Temporada tras temporada el FC Bayern normalmente terminan en la cima. Parte del tercer uniforme del club, este jersey adidas mantiene su inspiración cerca a su pecho con detalles sutiles en el mismo tono',
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/dfad324896bb453fab5aae890110ebb3_9366/Jersey_Tercer_Uniforme_FC_Bayern_22-23_Gris_H64104_25_model.jpg', 
        stock:19,
        category: 'mujer',
    },
]

export const getProducts = () =>{
    return new Promise((resolve,reject) => {
        if(products.length > 0 ){
            setTimeout(()=>{
                resolve(products)
            },2000)
        }else{
            reject("No hay productos")
        }
    })
}

export const getProduct = (id)=>{
    return new Promise((resolve,reject)=>{
        if(products.length > 0){
            const item = products.find( product => product.id === id )
            setTimeout(()=>{
                if(item){
                    resolve(item)
                }else{
                    reject(`No se encuentra el producto con el id`)
                }
            },2000)
        }else{
            reject("no hay productos")
        }
    })
}
