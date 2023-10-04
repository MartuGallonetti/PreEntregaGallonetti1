import { useState } from "react"
import { createContext } from "react"
import Cart from "./Cart";

//addItem (item y cantidad)
//removeItem (itemId)
//clear (vaciar carrito)
//isInCart (id, si esta o no)

//creamos contexto
export const CartContext = createContext([])

//creamos nuestro provider
export function CartContextProvider ({children}) {
    const [cart, setCart] = useState ([]);

//const addItem = (item, cantidad ) => {}


const clearCart = ()=> {
    setCart ([])
}
const removeItem = (itemId)=> {
    const actualizarCarrito = cart.filter((item) => item.id !== itemId);
        setCart(actualizarCarrito);

}

    return (
        <CartContext.Provider value= {{addItem, removeItem, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}
