import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";


// const mockAPI = (categoria) => {
//     return new Promise ((resolve) => {
//         setTimeout(() =>{
//             if (categoria != undefined) {
//                 const productosFiltrados = productosJson.filter (
//                     (item) => item.categoria === categoria
//                 );
//                 resolve (productosFiltrados);
//             } else {
//                 resolve(productosJson);
//             }           
//         }, 2000);
//     })
// }


export default function ItemListContainer () {
    const [productos, setProductos] = useState ([]);
    const { categoria } =useParams ()
    const [loading, setLoading] = useState (true)
    useEffect(() => {
        setLoading(true)
        const db = getFirestore()
        const productCollection = collection( db,"productos")
    setTimeout(()=> {
    getDocs(productCollection).then(value => {
        let datos = value.docs.map(e => {
            return{...e.data(), id: e.id}
        })
        let myData = categoria ? datos.filter((item) => item.category === categoria) : datos;
            
        if(categoria === "all") {
            myData = datos
            
        }
        setProductos(myData)
        setLoading(false)
})},1000)
}, [categoria])

    return (
        <div className="item-list-container">
            < ItemList productos={productos} />
        </div>
    )
}

