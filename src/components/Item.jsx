
export default function Item ({ productos }) {
    return (
        <div className="item">
            <img src= {productos.imagen} width={200} alt="" />
            <h2> {productos.nombre} </h2>
            <p> {productos.precio} </p>
        </div>
    )
}