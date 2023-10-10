import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Checkout from './components/Checkout'
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './firebase/firebase'
import { CartContextProvider } from './components/CartContext'
import Form from './components/Form'

export default function App() {
  initializeApp(firebaseConfig)
  return (
    <CartContextProvider>
    <BrowserRouter>
      <NavBar/>
    <Routes>
      <Route exact path='/' element= {<ItemListContainer/>} />
      <Route exact path='/category/:categoria' element= {<ItemListContainer/>} />
      <Route exact path='/item/:id' element= {<ItemDetailContainer/>} />
      <Route exact path='/cart' element= {<> < Checkout /> <Form/> </>} />
    </Routes>
    </BrowserRouter>
    </CartContextProvider>
  )
}

