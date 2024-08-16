import {useState} from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const countUp = () => {
    setCount(count + 1)
  }

  const countDown = () => {
    setCount (count - 1)
  }

  const countDouble = () => {
    setCount(count * 2)
  }

  const countHalf = () => {
    setCount(count / 2)
  }

  const reset = () => {
    setCount(0)
  }
  return (

    <div>
      <h2>Counter: {count} </h2>
        <button onClick = {countUp}>+</button>
        <button onClick = {countDown}>-</button>
        <button onClick = {countDouble}>x2</button>
        <button onClick = {countHalf}>/2</button>
        <button onClick = {reset}>Reset</button>
    </div>

  )




}


export default Counter;
