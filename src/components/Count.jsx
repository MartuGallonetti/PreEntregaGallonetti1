import { useState } from "react";

export default function Count () {
const [count, setCount] = useState (0);
return (
    <div className = "Count"> 
    <p> {count} </p>
    <button onClick={()=> setCount (count + 1)}> Sumar</button>
    </div>
)
}
