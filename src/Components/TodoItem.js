import React from 'react'

export default function TodoItem({ itemProps, handleChange, delTodo }) {
  return (
    <div>
      <li>
      <input
        type="checkbox"
        checked={itemProps.completed}
        onChange={() => handleChange(itemProps.id)}
      />
      <button onClick={() => delTodo(itemProps.id)}>Delete</button>
      {itemProps.title}
      </li>
    </div>
  )
}
