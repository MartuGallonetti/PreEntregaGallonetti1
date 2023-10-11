import { useContext,  useState } from "react"
import { ItemCounter } from "./ItemCounter"
import { CartContext } from "./CartContext"
import { Link } from "react-router-dom"
export default function ItemDetail ( {producto} ) {
    const {addItem} = useContext(CartContext)  
    const [add, setAdd] = useState(false)

    const onAdd = (count) => {
        setAdd(true)
        addItem(producto, count)
        
    }
    return (
        <div className="itemDetail">
            <img src= {producto.imagen} width= {300}  alt="" />
            <h2> {producto.nombre} </h2>
            <p> {producto.descripcion} </p>
            <span> {producto.precio} </span>
            { !add ?
                    <ItemCounter  onAdd={onAdd}/>   
                    : 
                    <>
                        <p className='itemAdded'>Producto añadido al Carrito</p>
                        <Link to="/cart"><button className='addToCart proceed'>Finalizar Compra</button></Link>
                    </>
                    }
        </div>
    )
}