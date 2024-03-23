import { useContext, useState } from 'react'
import { CheckoutL } from './CheckoutL'
import { CardContext } from '../../../context/CardContext'
import { addDoc, collection,  updateDoc, doc } from "firebase/firestore";
import { db } from '../../../firebaseConfig';

export const CheckoutContainer = () => {

    const [userInfo, setUserInfo] = useState({
        name : "",
        phone : "",
        email: ""
    })

    const { cart, getTotalPrice, clearCard } = useContext( CardContext )
    let totalPrice = getTotalPrice();

    const [orderId, setOrderId] = useState(null)

    const sendingData = ( event ) => {
        event.preventDefault();
        //ACA MANIPULO LO QUE QUIERA HACER CON LOS DATOS DEL FORMULARIO
        let order = {
            buyer: userInfo ,
            items: cart ,
            total: totalPrice
        }

        let ordersCollection =  collection(db, "orders")
        addDoc( ordersCollection , order ).then( res => setOrderId(res.id) )

        cart.forEach(product => {


            let refDoc = doc( db, "products", product.id  )
            updateDoc( refDoc , { stock: product.stock - product.quantity } )
        });

        clearCard();

    }


    const captureInfo = ( event ) => {
        setUserInfo( { ...userInfo, [event.target.name] : event.target.value  } )
    }

  return <CheckoutL orderId={orderId} sendingData={sendingData}  captureInfo={captureInfo} />;
}