'use client'

import { useRouter } from "next/navigation";
import { createContext, useState, useEffect  } from "react";
// import { act } from "react-dom/test-utils";
// import { CartContainer } from "../Containers/ItemListContainers/CartContainer";


export const CartContext = createContext();

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([])

    const router = useRouter;
    // console.log(cart)
    // let articulosCarrito = [];

    // const isInCart = (id) =>{
    //     return cart.findIndex(products => products.item.id === id)
    // }

    // const addCart = (product) => {
    // console.log(product);
        
    //     let estaCarrito = isInCart(product.item.id)
    //     console.log(estaCarrito);
        
    //     if (estaCarrito === -1){
    //         setCart([...cart, product])
    //     }else{
    //         let NuevoItem= {...cart[estaCarrito], quantity:  cart[estaCarrito].quantity + product.quantity}
    //         let listaNueva = cart.filter(products => product.item.id !== products.item.id)
    //         setCart([...listaNueva, NuevoItem])
    //     }
    //     showQuantity();
    // }

    useEffect(() => {
        setCartToState()
    }, [])

    const setCartToState = () => {
        setCart(
            localStorage.getItem('cart')
            ? JSON.parse(localStorage.getItem('cart'))
            : []
        )
    }

    const addToCart = async ({
        product,
        name,
        price,
        image,
        stock,
        seller,
        quantity = 1
    } )=>{ 
        const item = {
            product,
            name,
            price,
            image,
            stock,
            seller,
            quantity,
        };

        const isItemExist = cart?.carItems?.find(
            (i) => i.product === item.product
        )

        let newCartItems;

        if (isItemExist) {
            newCartItems = cart?.carItems?.map((i) =>
            i.product === isItemExist.product ? item : i
            )
        } else {
            newCartItems = [...(cart?.carItems || []), item]
        }
        localStorage.setItem("cart", JSON.stringify({ carItems: newCartItems}))
        setCartToState();
    };

    // const removeElementCart = (product) =>{
        
    //     let estaCarrito = isInCart(product.item.id)

    //     if (estaCarrito === -1) {
    //         const productsId = product.target.getAttribute('data-id');
    //         articulosCarrito = articulosCarrito.filter(products => products.id !== productsId)
    //     }
    // }

    // const clearCart = () =>{
    //     setCart([])
    // }

    // const showQuantity = () =>{
    //     console.log(cart)
    //     return cart.reduce((ant,act) => ant + act.quantity, 0)
    // }

    // function CartPrice() {
    //     var totalCosto = 0;
    //     const totalesProducto = cart.map((art) => art.item.price * art.contador ) 
        
    //     totalesProducto.map((price) => (totalCosto = totalCosto + price));
    //     return totalCosto;
    // }
    
    return <CartContext.Provider 
            value={{
                cart, 
                addToCart,
            // setCart, addCart, removeElementCart, clearCart, showQuantity, CartPrice
            }} 
            >
        {children}
    </CartContext.Provider>
};


