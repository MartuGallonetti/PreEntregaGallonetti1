export default function ItemDetail ( {productos} ) {
    return (
        <div className="ItemDetail">
            <img src= {productos.imagen} alt="" />
            <h2> {productos.nombre} </h2>
            <p> {productos.descripción} </p>
            <span> {productos.precio} </span>
        </div>
    )
}