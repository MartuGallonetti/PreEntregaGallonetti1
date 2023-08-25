import './App.css'
import ItemListContainer from './ItemListContainer'
import NavBar from './components/NavBar'


function App() {
  return (
    <>
      <NavBar/>
      
        <ItemListContainer greeting={'Bienvenidos a Vivero Jazmin'}/>
    </>
  )
}

export default App
