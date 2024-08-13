import React, { useState } from 'react';
import './App.css'; //styling



function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, { text: newTask, isCompleted: false }]);
    setNewTask('');
  };

  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}
            onClick={() => toggleComplete(index)}
          >
            {task.text}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;




// useState is a hook that lets you add React state to functional components.
// We maintain two states: tasks for the list of tasks, and newTask for the input value.
// addTask adds a new task to the list.
// toggleComplete toggles the completion state of a task (crosses it out when clicked).
// deleteTask removes a task from the list.
