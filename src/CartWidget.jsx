import imagenCarrito from './assets/react.svg'

function CartWidget () {
    return (
    <>
    <li>
        <img className='carrito' src= {imagenCarrito} alt="carrito" />
        
    </li>
    <h2>21</h2>
    </>
    )
}

export default CartWidget