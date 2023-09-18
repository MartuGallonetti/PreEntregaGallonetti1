import { Link } from 'react-router-dom'
import CartWidget from '../components/CartWidget'

export default function NavBar () {
    return (
        <nav>
            <Link to='/'>
            <img src= './assets/logoVivero.png' alt="" />
            </Link>
            
            <ul>
                <Link to= "/Inicio" >Inicio</Link>
                <Link to= "/Inicio" >Inicio</Link>
                <Link to= "/Inicio" >Inicio</Link>
                <Link to= "/Inicio" >Inicio</Link>
            </ul>
            <CartWidget/>
        </nav>
    )
}
