import React, {createContext, useEffect, useState} from "react";


const CartContext = createContext([])

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    const isInCart = (id) => {
        let inCart = false
        let item = cart.find(prod => prod.id === id)
        if (item) {
            inCart = true
        }
        return inCart
    }
    
    const addItem = (item, cantidad) => { 
    const updtItem = cart.find(prod => prod.id === item.id)
        if(!isInCart(item.id)){
            setCart([...cart, {id: item.id, nombre: item.nombre, precio: item.precio, cantidad: cantidad}])
            } else {
            const nuevaCantidad = updtItem.cantidad + cantidad
            setCart(cart.map((prod)=> {
                if(prod.id === item.id){ 
                    prod.cantidad = nuevaCantidad
                }
                return prod
            }))
            }

        
    }

    const removeItem = (item) => {
        setCart(cart.filter(prod => prod.id !== item.id))
        
    }

    const clear = () => {
        setCart([])
    }

    useEffect(() => {
        const tot = cart.reduce((acc, item) => {
            return acc + item.cantidad * item.precio;
        }, 0);
        setTotal(tot);
    }, [cart]);

    return (
        <CartContext.Provider value={{cart,  addItem, removeItem, clear, total}}>
            {children}
        </CartContext.Provider>)
}

export {CartContext, CartContextProvider}