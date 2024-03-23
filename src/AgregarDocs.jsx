import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { products } from "./productsMock";


export const AgregarDocs = () => {


    const rellenarDB = () =>{

        let productCollection = collection( db , "products" )
        products.forEach(element => {
            addDoc(productCollection, element)
        });
    }

  return (
    <div>
        <button onClick={rellenarDB}>Agregar documentos</button>
    </div>
  )
}
