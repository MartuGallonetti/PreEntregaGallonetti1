import { Link } from "react-router-dom"

export default function Boton () {

    return (
<>
            <h1 className="cartEmpty">No se encontro el producto</h1>
            <Link className="returnLink" to={"/"}>
            Ver nuestros productos
            </Link>
        </>
    )
}