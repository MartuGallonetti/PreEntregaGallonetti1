import { Link } from 'react-router-dom'
import CartWidget from '../components/CartWidget'

export default function NavBar () {
    return (
        <nav className='navBar'>
            <Link to='/'>
                <img className='logo' src='../logoVivero.png' alt="logo" />
            </Link>
            
            <ul className='nav'>
                <Link to= "/category/Flores" >Flores</Link>
                <Link to= "/category/Aromaticas" >Aromáticas</Link>
                <Link to= "/category/Helechos" >Helechos</Link>
            </ul>
            <CartWidget/>
        </nav>
    )
}
