import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import productosJson from "../productos.json"

const mockAPI = () => {
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve(productosJson);
        }, 2000);
    })
}


export default function ItemListContainer () {
    const [productos, setProductos] = useState ([]);

    useEffect (() => {
        mockAPI().then((data) => setProductos(data));
    }, []);

    return (
        <div className="item-list-container">
            <ItemList productos={productos} />
        </div>
    )
}

