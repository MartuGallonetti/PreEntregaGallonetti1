import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import productosJson from "../productos.json"
import { useParams } from "react-router-dom";

const mockAPI = (categoria) => {
    return new Promise ((resolve) => {
        setTimeout(() =>{
            if (categoria != undefined) {
                const productosFiltrados = productosJson.filter (
                    (item) => item.categoria === categoria
                );
                resolve (productosFiltrados);
            } else {
                resolve(productosJson);
            }           
        }, 2000);
    })
}


export default function ItemListContainer () {
    const [productos, setProductos] = useState ([]);
    const { categoria } =useParams ()

    useEffect (() => {
        mockAPI(categoria).then((data) => setProductos(data));
    }, [categoria]);

    return (
        <div className="item-list-container">
            < ItemList productos={productos} />
        </div>
    )
}

