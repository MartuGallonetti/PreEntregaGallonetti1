import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContext, CartContextProvider } from './components/CartContext'



export default function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <NavBar/>
    <Routes>
      <Route exact path='/' element= {<ItemListContainer/>} />
      <Route exact path='/category/:categoria' element= {<ItemListContainer/>} />
      <Route exact path='/item/:id' element= {<ItemDetailContainer/>} />
      <Route exact path='/carrito' element= {<CartContext/>} /> 
    </Routes>
    </BrowserRouter>
    </CartContextProvider>
  )
}

