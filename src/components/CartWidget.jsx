import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


export default function CartWidget () {
    return (
        <div className="cart-widget">
            <span>0</span>
            <FontAwesomeIcon icon={faShoppingCart} size="2x" color="white" />
        </div>
    )
}


