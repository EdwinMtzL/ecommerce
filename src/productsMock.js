const products = [
    {
        id: 1,
        title:'audifonos',
        price: 700,
        description: 'la novedad',
        image: '', 
        stock:112,
        category: 'Accesorios',
    },
    {
        id: 2,
        title:'iPhone',
        price: 8700,
        description: 'la novedad en moviles',
        image: '', 
        stock:12,
        category: 'Celulares',
    },
    {
        id: 3,
        title:'Nintendo',
        price: 12700,
        description: 'consola semi nueva',
        image: '', 
        stock:12,
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
    return new Promise((resolve,reject)=>{
        if(products.length > 0){
            const item = products.find( product => product.id === id )
            setTimeout(()=>{
                if(item){
                    resolve(item)
                }else{
                    reject(`No se encuentra el producto con el id ${id}`)
                }
            },2000)
        }else{
            reject("no hay productos")
        }
    })
}