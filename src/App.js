import React from 'react';
import TodoList from './components/TodoList';
import './App.css';
import './fonts/PermanentMarker-Regular.ttf';
import './fonts/SignikaNegative-Regular.ttf';

const App = () => {
  return (
    <div>
      <h1 className="thingz-to-do">Thingz-To-Do</h1>
      <TodoList />
    </div>
  );
}

export default App;