import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from './CartContext';


export default function CartWidget () {
    return (
        <div className="cart-widget">
            <CartContext/>
            <FontAwesomeIcon icon={faShoppingCart} size="2x" color="white" />
        </div>
    )
}


