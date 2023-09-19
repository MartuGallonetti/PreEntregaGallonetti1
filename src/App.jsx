import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



export default function App() {
  return (
    <BrowserRouter>
      <NavBar/>
    <Routes>
      <Route exact path='/' element= {<ItemListContainer/>} />
      <Route exact path='/category/:categoria' element= {<ItemListContainer/>} />
      <Route exact path='/item/:itemId' element= {<ItemListContainer/>} />
    </Routes>
    </BrowserRouter>
  )
}

