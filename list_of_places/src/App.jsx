
import './App.css'
import {useState} from 'react'
import Button from './assets/Button/Button'
import List from './assets/List/List'


function App() {
  const [list, setList] = useState(false)

  const handleList = () => {
    setList(!list)
  }

  return (
    <div className = "container">
      <h2>Countries I had visited: </h2>
      <Button onClick = {handleList}></Button>
      {list && <List/>}
    </div>
  )
}

export default App
