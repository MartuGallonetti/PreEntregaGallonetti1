import { Link } from "react-router-dom"
import Boton from "./Boton"

export default function Item ({ productos }) {
    return (
        <div className="item">
            <img className="imagen" src= {productos.imagen} width={200} alt= {productos.nombre} />
            <Link to= {`./item/${productos.id}`} ><h3> {productos.nombre} </h3></Link>
            <p className="precio"> {productos.precio} </p>
            <Boton/>
        </div>
    )
}