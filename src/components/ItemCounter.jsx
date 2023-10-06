import React, { useState } from 'react';


const ItemCounter = ({onAdd}) => {
    
    const [Cant, setCant] = useState(0)

    const sumar = () => {
        setCant(prevCant => prevCant+1)
    }
    const restar = () => {
        if(Cant>0){
            setCant(prevCant => prevCant-1)
        }
    }
    return (
        <>
            <div className='detailBtns'>
                <button className='btnCant restar' disabled={Cant===0} onClick={restar}>-</button>
                <p className='cantidad'>{Cant}</p>
                <button className='btnCant sumar'  onClick={sumar}>+</button> 
            </div>
            <div>
                <div className='btnsContainer'>
                    <button className='addToCart' disabled={Cant===0} onClick={()=> onAdd(Cant) }>Agregar al Carrito</button> 
                </div> 
            </div>
        </>
    )
}

export { ItemCounter }