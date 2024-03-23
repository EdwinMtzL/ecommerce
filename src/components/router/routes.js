import { Formik } from "formik";
import { ItemDetailContainer } from "../pages/ItemDetailContainer";
import CartContainer from "../pages/cart/CartContainer";
import { CheckoutContainer } from "../pages/checkout/CheckoutContainer";
import ItemListContainer from "../pages/itemListContainer/ItemListContainer";

export const routes = [
    {
        id: "home" ,
        path: "/",
        Element: ItemListContainer,
    },
    {
        id: "category" ,
        path: "/category/:category",
        Element: ItemListContainer,
    }, {
        id: "cart" ,
        path: "/cart",
        Element: CartContainer,
    }, {
        id: "detail" ,
        path: "/item/:id",
        Element: ItemDetailContainer,
    }, {
        id: "checkout" ,
        path: "/checkout",
        Element: CheckoutContainer,
    },
    {
        id: "formik" ,
        path: "/formik",
        Element: Formik,
    },
    
]