import {useState} from 'react'
import './App.css'

function App (){
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount(count + 1)
  }

  const countDown = () => {
    setCount(count - 1)
  }

  return (
    <>
    <div className="container">
      <h1>Counter: {count}</h1>
      <button onClick ={countUp}>+</button>
      <button onClick ={countDown}>-</button>

    </div>
    </>
  )

}

export default App
