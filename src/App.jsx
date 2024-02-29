import { useState } from "react"
import Counter from "./components/common/Counter"
import Navbar from "./components/layout/Navbar"
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer"
import 'bootstrap';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCountContainer from "./components/common/itemCount/ItemCountContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/common/Cart";
import { ItemDetailContainer } from "./components/pages/ItemDetailContainer";


const App= ()=> {  

 const [darkMode, setDarkMode] = useState(false);

//  const cambiarModo = () => {
//   setDarkMode( !darkMode )
//  }

//  console.log(darkMode);

  return (
    <>
      <>
        {/* <button onClick={cambiarModo}>De modo claro a modo oscuro</button> */}
        {/* <ItemCountContainer stock={3}/> */}
        {/* <Navbar />
        <ItemListContainer /> */}
        {/* // <Counter/>  */}

    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element=<ItemListContainer/> />
        <Route path="/category/:category" element=<ItemListContainer/> />
        <Route path="/cart" element=<Cart/> />
        <Route path="/item/:id" element=<ItemDetailContainer/> />
      </Routes>
    </BrowserRouter>

      </>
    </>
  )
}
export default App
