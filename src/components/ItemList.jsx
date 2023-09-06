import { useEffect, useState } from "react";
import 

function obtenerProductos() {
    return new Promise ((resultado) => {
        setTimeout (() => {resultado (productos);
        }, 3000);
    })
}


export default function ItemList () {
    const [productos, setProductos] = useState ([])

    useEffect (() => {
        obtenerProductos().then ((data) => {
            setProductos (data)
        })
    }, []);


    return (
        <div className="item-list">
            {productos.map ((productos) => (
                <Item key= {productos.id} productos = {productos} />
            ))}
        </div>
    )
}