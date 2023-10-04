import { useContext } from "react"
import { CartContext } from "./CartContext"



export default function Boton () {

    const {}= useContext (CartContext)

    return (
        <button className= "boton" onClick={() => addItem(item, cantidad)}>
            Agregar al carrito
        </button>
    )
}