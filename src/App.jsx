import { useState } from "react"
import Counter from "./components/common/Counter"
import Navbar from "./components/layout/Navbar"
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer"
import 'bootstrap';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCountContainer from "./components/common/itemCount/ItemCountContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Cart from "./components/common/Cart";
import { ItemDetailContainer } from "./components/pages/ItemDetailContainer";
import CardContextProvaider from "./context/CardContext";
import CartContainer from "./components/pages/cart/CartContainer";
import { CheckoutContainer } from "./components/pages/checkout/CheckoutContainer";
import { FormFormik } from "./components/pages/formFormik/FormFormik";
import Layout from "./components/layout/Layaout";

const App= ()=> {  


  return (
    <>
      <BrowserRouter>
        <CardContextProvaider>
          <Navbar/>
          <Routes>
              <Route path="/" element={<ItemListContainer/>} />
              <Route path="/category/:category" element={<ItemListContainer/>} />
              <Route path="/cart" element={<CartContainer/>} />
              <Route path="/item/:id" element={<ItemDetailContainer/>} />
              <Route path="/checkout" element={<CheckoutContainer/>} />
              <Route path="/formik" element={<FormFormik/>} />
              <Route path="*" element={<h1>404 not found</h1>} />
          </Routes>
        </CardContextProvaider>
      </BrowserRouter>
    </>
  )
}
export default App
