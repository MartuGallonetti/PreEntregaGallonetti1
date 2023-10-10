import { Link } from "react-router-dom/dist"
import { ItemCounter } from "./ItemCounter"

export default function ItemDetail ( {producto} ) {
    return (
        <div className="itemDetail">
            <img src= {producto.imagen} width= {300}  alt="" />
            <Link to={`./item/${producto.id}`}><h2> {producto.nombre} </h2></Link>
            <p> {producto.descripcion} </p>
            <span> {producto.precio} </span>
            <ItemCounter />
        </div>
    )
}