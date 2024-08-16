import {useState} from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const countUp = () => {
    setCount(count + 1)
  }

  const countDown = () => {
    setCount (count - 1)
  }

  return (

    <div>
      <h2>Counter: {count} </h2>
        <button onClick = {countUp}>+</button>
        <button onClick = {countDown}>-</button>
    </div>

  )




}
