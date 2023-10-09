import React, { useState } from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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
                <Link> <FontAwesomeIcon icon={faPlus} color= "70B77E" /> 
                <button className='btnCant restar' disabled={Cant===0} onClick={restar}>-</button></Link>
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