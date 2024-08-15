import {useState} from 'react'
import './App.css'
import Message from "./components/Message/Message"
import Farewell from "./components/Farewell/Farewell"


function App() {
  const [message, setMessage] = useState(false);

  const handleClick = () => {
    setMessage(!message)
  }

return(
<>
<div><h1>Message Below</h1></div>
<button onClick ={handleClick}>
  {message ? 'Hidden':'Shown'}
</button>
{message && <Message></Message>}

<Farewell></Farewell>
</>
)

}

export default App

// {message && <Message></Message>} uses a conditional, the && operator to show Message only when message is true.
