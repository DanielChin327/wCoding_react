import "./Button.css"
import { useState } from "react";

function Button () {
  const [counter, setCounter] = useState(0)
  return (
    <button className = "button" onClick ={() => setCounter ((counter) => counter + 1)}>Button Pressed {counter}</button>
  )
}
export default Button;
