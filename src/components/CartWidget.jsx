import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


export default function CartWidget () {
    return (
        <div className="cart-widget">
            <Link to= {`./checkout/`}> <FontAwesomeIcon icon={faShoppingCart} size="2x" color="white" /></Link>
        </div>
    )
}


