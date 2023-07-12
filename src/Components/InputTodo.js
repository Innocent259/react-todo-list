import React from 'react'
import { useState } from 'react'

export default function InputTodo({ addTodoItem }) {
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')
  const handleChange = (e) => {
    setTitle(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle('');
      setMessage('');
    } else {
      setMessage('Please add item');
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        <input 
        type="text"
        value={title}
        onChange={handleChange}
        placeholder="Add Todo..."
        className="input-text"
        />
        <button className="input-submit">Submit</button>
    </form>
    <span className="submit-warning">{message}</span>
    </div>
  )
}
