import React from "react";
import { CartContext } from "./CartContext";
import { useContext } from "react";

const Total = () => {
    const {cart} = useContext(CartContext)
    let total = 0
    let totalCantidad = 0
    // eslint-disable-next-line array-callback-return
    cart.map(item => {
        total += item.cantidad * item.precio
        totalCantidad +=item.cantidad
    })

    return(
        <>
        <div className="total">
        <h1>{`TOTAL PRODUCTOS: ${totalCantidad} `}    </h1>
        <h1>{`TOTAL: $ ${total}`}</h1>
        </div>
        </>
    )
}

export { Total } 