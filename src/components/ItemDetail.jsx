import { Link } from "react-router-dom/dist"
import Count from "./Count"

export default function ItemDetail ( {producto} ) {
    return (
        <div className="itemDetail">
            <img src= {producto.imagen} width= {300}  alt="" />
            <Link to={`./item/${producto.id}`}><h2> {producto.nombre} </h2></Link>
            <p> {producto.descripción} </p>
            <span> {producto.precio} </span>
            <Count/>
        </div>
    )
}