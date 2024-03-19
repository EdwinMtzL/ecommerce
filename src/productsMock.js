const products = [
    {
        id: 1,
        title:'audifonos',
        price: 700,
        description: 'la novedad',
        image: 'https://res.cloudinary.com/dhvinlwbj/image/upload/v1710794080/Ecommerce/Hombre/hl82sp9zmzm56wqnhtk2.jpg', 
        stock:11,
        category: 'Accesorios',
    },
    {
        id: 2,
        title:'iPhone',
        price: 8700,
        description: 'la novedad en moviles',
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6ebc2e8b8fd44d92a84111595567e820_9366/Jersey_Uniforme_Local_Real_Madrid_23-24_Blanco_IB0016_HM1.jpg', 
        stock:5,
        category: 'Celulares',
    },
    {
        id: 3,
        title:'Nintendo',
        price: 12700,
        description: 'consola semi nueva',
        image: '', 
        stock:3,
        category: 'Consolas',
    },
    {
        id: 4,
        title:'Xbox One',
        price: 1240,
        description: 'la novedad',
        image: '', 
        stock:112,
        category: 'Consolas',
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
    console.log(id);
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