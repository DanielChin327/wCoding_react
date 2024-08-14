import './AddContentButton.css'
import {useState} from 'react'
import ContentComponent from '../ContentComponent/ContentComponent'

function AddContentButton () {
  const [tasks, setAddContent] = useState([]);

  const handleClick = () => {
    setAddTasks(...textArray, <Content key = {tasks.length}/>)
  }

  return (
    <>
    <button className ="button" onClick = {handleClick}>+</button>
    <div>{tasks}</div>
    </>
  )

}

export default AddContentButton
