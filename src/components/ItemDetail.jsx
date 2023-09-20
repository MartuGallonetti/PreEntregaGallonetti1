export default function ItemDetail ( {producto} ) {
    return (
        <div className="ItemDetail">
            <img src= {producto.imagen} width= {100}  alt="" />
            <h2> {producto.nombre} </h2>
            <p> {productos.descripción} </p>
            <span> {producto.precio} </span>
        </div>
    )
}