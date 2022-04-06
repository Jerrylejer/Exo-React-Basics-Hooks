import React from 'react';
import ClassStates from './Component/State/ClassStates';
import UseStateComp from './Component/State/UseStateComp';
import TodoList from './Component/State/TodoList/TodoList';

function App() {

  return (
    <div className="container text-center">
      <h1>Basics Hooks</h1>
      <ClassStates />
      <hr />
      <UseStateComp />
      <hr />
      <TodoList />
    </div>
  
  );
}

export default App;
