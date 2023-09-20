import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productosJson from '../productos.json'
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
const [producto, setProducto] = useState();
const { id } = useParams(); 

useEffect(() => {
    
    const obtenerProducto = async () => {
    try {
        
        await new Promise((res) => setTimeout(res, 1000));
        const selectedProduct = productosJson.find((producto) => producto.id === Number(id));
        
        setProducto(selectedProduct);
    } catch (error) {
        console.error("Error al obtener el producto:", error);
    }
    };

    obtenerProducto();
}, [id]);

if (!producto) {
    return <p>Cargando...</p>;
}

return (
    <div className="item-list-container">
        <ItemDetail producto={producto} />
    </div>
);
}
