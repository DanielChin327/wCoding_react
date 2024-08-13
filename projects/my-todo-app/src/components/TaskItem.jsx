import React from 'react';

function TaskItem({ task, index, toggleComplete, deleteTask }) {
  return (
    <li>
      <span
        style={{ textDecoration: task.isCompleted ? 'line-through' : 'none', cursor: 'pointer' }}
        onClick={() => toggleComplete(index)}
      >
        {task.text}
      </span>
      <button onClick={() => deleteTask(index)}>Delete</button>
    </li>
  );
}

export default TaskItem;
