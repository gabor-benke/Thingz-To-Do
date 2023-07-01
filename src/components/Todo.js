import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { CgCloseO } from 'react-icons/cg';
import { BiEdit } from 'react-icons/bi';

const Todo = ({todos, completeTodo, removeTodo, updateTodo}) => {

  const [ edit, setEdit ] = useState({
    id: null,
    value: ''
  });
  
  // This function is for submitting the changes once the purple edit button, then the form's UPDATE button is clicked
  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    })
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate}/>
  }

  return todos.map((todo, index) => (
    <div className={todo.isComplete ? 'todo-row-complete' : 'todo-row'} key={index}>
      <div className='todo-text' key={todo.id} onClick={() => completeTodo(todo.id)}>
      {todo.text}
      </div>
      <div className='icons'>
        <CgCloseO 
        onClick={() => removeTodo(todo.id)}
        className='delete-icon'
        />
        <BiEdit
        onClick={() => setEdit({id: todo.id, text: todo.text})}
        className='edit-icon'
        />
      </div>
    </div>
  ))
}

export default Todo;