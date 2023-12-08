
import './App.css'
import Card1 from './Components/Card1'
import Card2 from './Components/Card2'
import Bootstrap from './Components/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
 

  return (
    <>
     <Card1 name="card1" desc="this is card1"/>
     <Card2 name="card2"/>
     <Bootstrap button="Juicy Button"/>
    </>
  )
}

export default App
