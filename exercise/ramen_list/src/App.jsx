import {useState} from 'react'
import './App.css'
import Button from './assets/Button'
import RamenList from './assets/RamenList';


function App() {
  const [showRamen, setShowRamen] = useState(false);

  const handleShowRamen = () => (
    setShowRamen(!showRamen)
  )


return(
  <div className ="container">
    <h1>Ramen Types</h1>
    <Button onClick = {handleShowRamen}></Button>
    {showRamen && <RamenList />}
  </div>
)
}

export default App

//     {showRamen && <RamenList />} -> This is conditional rendering. showRamen has to be True and then RamenList will spill
