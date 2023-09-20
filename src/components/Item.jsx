
export default function Item ({ productos }) {
    return (
        <div className="item">
            <img className="imagen" src= {productos.imagen} width={200} alt= {productos.nombre} />
            <h3> {productos.nombre} </h3>
            <p className="precio"> {productos.precio} </p>
        </div>
    )
}