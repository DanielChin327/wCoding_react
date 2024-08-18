
import './App.css'
import Button from './assets/Button/Button'
import List from './assets/List/List'


function App() {
  const [list, setList] = useState(false)

  const handleList = () => {
    setList(!list)
  }

  return (
    <div className = "container">
      <h2>Countries I had visited</h2>


    </div>
  )
}

export default App
