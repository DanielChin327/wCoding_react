import {useState} from 'react'

const SimpleToDo = () => {

const [task, setTask] = useState('') // State to store the current input
const [tasks, setTasks] = useState([]) // State to store the list of tasks

const handleAddTask = () => {
  setTasks([...tasks, task]) // Add the new task to the tasks array
  setTask('') //Cear the input field after adding the task
}

return (
<>
<div>
  <h2> Simple To Do </h2>
    <input
      type="text"
      value={task}
      onChange={(e) => setTask(e.target.value)} // update the input value
      placeholder = "Add a task"
      />
    <button onClick = {handleAddTask}>Add</button>

    <ul>
      {tasks.map((t, index) => (
        <li key={index}>{t}</li> //display each task in the list
      ))}
    </ul>
    </div>
</>
)




}
export default SimpleToDo
