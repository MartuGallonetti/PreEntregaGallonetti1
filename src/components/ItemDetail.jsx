export default function ItemDetail ( {producto} ) {
    return (
        <div className="itemDetail">
            <img src= {producto.imagen} width= {300}  alt="" />
            <h2> {producto.nombre} </h2>
            <p> {producto.descripción} </p>
            <span> {producto.precio} </span>
        </div>
    )
}