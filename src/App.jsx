import { useState } from "react"
import Counter from "./components/common/Counter"
import Navbar from "./components/layout/Navbar"
import ItemListContainer from "./components/pages/ItemListContainer"
import 'bootstrap';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const App= ()=> {  

 const [darkMode, setDarkMode] = useState(false);

 const cambiarModo = () => {
  setDarkMode( !darkMode )
 }

 console.log(darkMode);

  return (
    <>
      <div>
        {/* <button onClick={cambiarModo}>De modo claro a modo oscuro</button> */}
        <Navbar />
        <ItemListContainer  saludo={"Edy"} />
        <Counter/>
      </div>
    </>
  )
}
export default App
