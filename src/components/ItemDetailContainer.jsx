import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer () {
    const [productos, setProductos] = useState ();

    useEffect (() => {
        fetch ('../productos.json')
        .then (resultado => resultado.json ())
        .then ((data) => setProductos (data))
    }, []);

if (! productos) return null

return (
    <div className="item-detail-container">
        <ItemDetail productos= {productos} />
    </div>
)
}

