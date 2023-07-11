import React from 'react'
import TodoItem from './TodoItem'

export default function TodosList({ todosProps, handleChange, delTodo }) {
  return (
    <div>
      <ul>
        {todosProps.map((todo) => (
          <TodoItem 
          key={todo.id} 
          itemProps={todo} 
          handleChange={handleChange} 
          delTodo={delTodo}
          />
        ))}
      </ul>
    </div>
  )
}
