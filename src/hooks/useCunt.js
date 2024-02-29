import { useState } from "react"


export const useCount = (inicial=0)=>{

    const [count, setCount] = useState(inicial)
     
    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        if( count > 0 ){
            setCount(count - 1)
        }
    }

    const reset = () => {
        setCount(inicial)
    }

    return {
        count,
        increment,
        decrement,
        reset
    }
}