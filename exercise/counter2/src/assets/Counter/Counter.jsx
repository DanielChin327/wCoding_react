import {useState} from 'react'


const Counter = () => {
  const [count, setCount] = useState(0)

  const countUp = () => {
    setCount(count + 1)
  }

  const countDown = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <h3>Counter: </h3>
        <button onClick = {countUp}>+</button>
        <button onClick = {countDown}>-</button>
    </div>
  )

}

export default Counter
