import React, { useState } from 'react'
import FetchinData from './FetchinData'
import { useEffect } from 'react'

export const FetchinDataContainer =()=> {

const [users, setUsers] = useState([]) 

useEffect( ()=>{
    
    let getData = fetch("https://jsonplaceholder.typicode.com/users")
    getData
        .then( (data) => data.json())
        .then( (resp)=> { 
            setUsers(resp)
         } )
        .catch( (error)=> { console.log(error) } )    

} , [] )
0
const addUser =()=>{
    let obj ={
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496"
          }
        }
    };

    let tarea = fetch("https://jsonplaceholder.typicode.com/users",{
        method: "POST",
        body: JSON.stringify(obj),
        headers:{
            
        }
    });
    tarea.then((resp)=>console.log(resp)).catch((error)=>{console.log(error);})
};

const updateUser =()=>{
    let obj ={
        name: "Leanne pai",
       
    };

    let tarea = fetch("https://jsonplaceholder.typicode.com/users/2",{
        method: "PUT",
        body: JSON.stringify(obj),
        headers:{
            
        }
    });
    tarea.then((resp)=>console.log(resp)).catch((error)=>{console.log(error);})
};

  return (
    <div> <FetchinData addUser={addUser}/> </div>
  )
}
