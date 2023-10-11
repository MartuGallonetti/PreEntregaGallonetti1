import React from "react";
import { CartContext } from "./CartContext";
import { useContext } from "react";

const Total = ({mostrarResto, mostrarTotal}) => {
    const {cart} = useContext(CartContext)
    let total = 0
    let totalCantidad = 0
    cart.map(item => {
        total += item.cantidad * item.precio
        totalCantidad +=item.cantidad
    })

    return(
        <>
        {mostrarResto && <div className="total">
        <h1>{`TOTAL PRODUCTOS: ${totalCantidad} `}    </h1>
        <h1>{`TOTAL: $ ${total}`}</h1>
        </div>}
        {mostrarTotal && <p>{totalCantidad}</p>}
        </>
    )
}


export { Total } 