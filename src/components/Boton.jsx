import { useContext } from "react"

export default function Boton () {

    return (
        <button className= "boton" onClick={() => addItem(item, cantidad)}>
            Agregar al carrito
        </button>
    )
}