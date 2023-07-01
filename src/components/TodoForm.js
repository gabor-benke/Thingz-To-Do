import React, { useState } from 'react';

const TodoForm = (props) => {

  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  
  // This function will handle the change on the input field
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  
  // This function is responsible for the action on clicking the ADD or UPDATE buttons
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    })
    setInput('');
  };

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      {props.edit ? (
      <>
        <input 
          className='todo-update'
          type='text'
          placeholder='Update your todo...'
          value={input}
          name='text'
          onChange={handleChange}
          maxLength={70}
        />
        <button className='update-button'>UPDATE</button>
      </>
      ) : (
      <>
        <input 
          className='todo-input'
          type='text'
          placeholder='Add something to do...'
          value={input}
          name='text'
          onChange={handleChange}
          maxLength={70}
        />
        <button className='add-button'>ADD</button>
      </>
      )}
    </form>
    
  );
}

export default TodoForm;