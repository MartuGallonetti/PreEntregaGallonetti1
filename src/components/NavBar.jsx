import CartWidget from '../CartWidget'
function NavBar () {
    return (
        <>
        <header className="header">
        
        <nav className="navBar">
            <ul className="nav">
                <li><a href="./index.html">Inicio</a></li>
                <li><a href="./plantas.html">Plantas</a></li>
                <li><a href="./accesorios.html">Accesorios</a></li>
                <li><a href="./sobreNosotros.html">Sobre nosotros</a></li>
                <CartWidget/>
            </ul>
            </nav>
            </header>
            </> )
}

export default NavBar