
export default function Item ({ productos }) {
    return (
        <div className="item card w-40  mt-3">
            <img src= {productos.imagen} width={250} alt= {productos.nombre} />
            <h3> {productos.nombre} </h3>
            <p> {productos.precio} </p>
        </div>
    )
}