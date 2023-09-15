import Item from "./Item";

export default function ItemList ( {productos} ) {
    return (
        <div className="item-list">
            {productos.map ((productos) => (
                <Item key= {productos.id} productos = {productos} />
            ))}
        </div>
    )
}