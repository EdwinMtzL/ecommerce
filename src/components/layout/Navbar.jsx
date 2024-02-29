// import { FaMugSaucer } from "react-icons/fa6";

import { Link } from "react-router-dom";
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
          <Link to="/">
            <button className="nav-link active">Inicio</button>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/category/Accesorios">
            <button className="nav-link">Accesorios iPhone</button>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/category/Celulares">
            <button className="nav-link">Celulares</button>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/category/Consolas">
            <button className="nav-link">Consolas</button>
          </Link>
        </li>
      </ul>
      <div className="navbar-text d-flex">
        <Link to="cart">
          <CartWidget/>
        </Link>
      </div>
    </div>
  </div>
</nav>
  )
}
