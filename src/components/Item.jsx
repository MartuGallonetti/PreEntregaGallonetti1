import { Link } from "react-router-dom"
import React, { useState, useContext} from 'react';
import { ItemCounter } from "./ItemCounter"
import { CartContext } from './CartContext';


export default function Item ({ productos }) {
    const {addItem} = useContext(CartContext)  
    const [add, setAdd] = useState(false)

    const onAdd = (count) => {
        setAdd(true)
        addItem(productos, count)
    }
    return (
        <div className="item">
            <img className="imagen" src= {productos.imagen} width={200} alt= {productos.nombre} />
            <Link to= {`../../item/${productos.nombre}`} ><h3> {productos.nombre} </h3></Link>
            <p className="precio"> {productos.precio} </p>
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