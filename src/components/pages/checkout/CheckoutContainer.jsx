import { useState } from 'react'
import { Checkout } from './checkout'

export const CheckoutContainer = () => {

    const [userInfo, setUserInfo] = useState({
        name : '',
        lastName : ''
    })

    const sendingData = ( event ) => {
        event.preventDefault();
        console.log(userInfo);
    }

    const captureInfo = ( event ) => {
 
        setUserInfo( { ...userInfo, [event.target.name] : event.target.value  } )
    }

  return <Checkout sendingData={sendingData}  captureInfo={captureInfo} />;
}