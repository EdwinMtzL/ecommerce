// import { FaMugSaucer } from "react-icons/fa6";

import { Link } from "react-router-dom";
import { CartWidget } from "../common/CartWidget";



export default function Navbar() {
  return (   
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <span className="navbar-brand" href="#">
      <img src="https://res.cloudinary.com/dhvinlwbj/image/upload/v1711220208/Ecommerce/o1t9zhmapkzgtne4urth.png" alt="" />
      <span className="ms-2">Topa morita</span>
    </span>
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
          <Link to="/category/hombre">
            <button className="nav-link">Hombre</button>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/category/mujer">
            <button className="nav-link">Mujer</button>
          </Link>
        </li>     
      </ul>
      <div className="navbar-text d-flex">
        <Link to="/cart">
          <CartWidget/>
        </Link>
      </div>
    </div>
  </div>
</nav>
  )
}
