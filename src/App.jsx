import { useState } from "react"
import Counter from "./components/common/Counter"
import Navbar from "./components/layout/Navbar"
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer"
import 'bootstrap';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCountContainer from "./components/common/itemCount/ItemCountContainer";


const App= ()=> {  

 const [darkMode, setDarkMode] = useState(false);

 const cambiarModo = () => {
  setDarkMode( !darkMode )
 }

 console.log(darkMode);

  return (
    <>
      <>
        {/* <button onClick={cambiarModo}>De modo claro a modo oscuro</button> */}
        {/* <ItemCountContainer stock={3}/> */}
        <Navbar />
        <ItemListContainer />
        {/* // <Counter/>  */}
      </>
    </>
  )
}
export default App
