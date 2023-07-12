import React from 'react'
import { useState } from 'react';
import styles from '../styles/TodoItem.module.css';

export default function TodoItem({ itemProps, handleChange, delTodo, setUpdate }) {
  const [editing, setEditing] = useState(false);
  const handleEditing = () => {
    setEditing(true);
  };
  let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }
  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };
  return (
      <li className={styles.item}>
        <div className={styles.content} style={viewMode}>
          <input
        type="checkbox"
        checked={itemProps.completed}
        onChange={() => handleChange(itemProps.id)}
      />
      {itemProps.title}
      <span>
        <button onClick={handleEditing}>Edit</button>
        <button onClick={() => delTodo(itemProps.id)}>Delete</button>
      </span>
        </div>
        <input
      type="text"
      value={itemProps.title}
      className={styles.textInput}
      style={editMode}
      onChange={(e) => setUpdate(e.target.value, itemProps.id)}
      onKeyDown={handleUpdatedDone}
       />   
      </li>
  )
}
