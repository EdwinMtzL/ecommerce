// import { FaMugSaucer } from "react-icons/fa6";

import { CartWidget } from "../common/CartWidget";



export default function Navbar() {
  return (   
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Accesorios iPhone</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Accesorios Android</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Computadora</a>
        </li>
      </ul>
      <div className="navbar-text d-flex">
        <span className="me-2">Carrito</span> 
        <CartWidget/>
      </div>
    </div>
  </div>
</nav>
  )
}
