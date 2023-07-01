import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

const TodoList = () => {
  
  // Defining the state of TodoList:
  const [ todos, setTodos ] = useState([]);
  
  // Adding a new todo:
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodo = [todo, ...todos];
    setTodos(newTodo);
  };

  // Removing a todo:
  const removeTodo = (id) => {
    const removeArr = [...todos].filter(todo => todo.id !== id);
    setTodos(removeArr);
  };

  // Updating a todo:
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
  };

  // Toggling between true and false:
  const completeTodo = (id) => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    })
    setTodos(updatedTodos);
  };

  return (
    <div className='todo-list'>
      <h2 className='plans'>My plans for today:</h2>
      <TodoForm onSubmit={addTodo}/>
      <Todo 
      todos={todos}
      completeTodo={completeTodo}
      removeTodo={removeTodo}
      updateTodo={updateTodo} 
      />  
    </div>
  )
}

export default TodoList;