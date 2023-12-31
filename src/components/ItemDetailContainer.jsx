import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { collection, getDocs  } from "firebase/firestore"
import {getFirestore} from "../firebase/firebase"

export default function ItemDetailContainer() {
const [producto, setProducto] = useState();
const [loading, setLoading] = useState(true);
const { nombre } = useParams(); 

useEffect(() => {
    setLoading(true)
    
    const db = getFirestore()
    
    const productCollection = collection(db,"productos")

setTimeout(()=> {
    getDocs(productCollection).then(value => {
        let datos = value.docs.map(e => {
            return {...e.data(), id: e.id}
        
        })
        console.log (datos)
        const singleProd = datos.find((e) => e.nombre === nombre);
        setProducto(singleProd)
        setLoading(false)
})},1500) 
}, [nombre])

return (
    loading ? <img className="loadingListContainer" src="https://c.tenor.com/9IsrqCRzmNwAAAAC/tyrannosaurus-dinosaur.gif" alt="Cargando el contenido" /> :
    <div className="item-detail-container">
        <ItemDetail producto={producto} />
    </div>
);
}
