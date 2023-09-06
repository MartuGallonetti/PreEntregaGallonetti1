import { useState } from "react";

export default function Count () {
const [count, setCount] = useState (0);
return (
    <div className = "App"> 
    <h1> Contador </h1>
    <p> {count} </p>
    <button onClick={()=> setCount (count + 1)}> Sumar</button>
    <p> Contador de practica </p>
    </div>
)
}
