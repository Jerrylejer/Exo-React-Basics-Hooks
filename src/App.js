import React from 'react';
// state & useState
import ClassStates from './Component/State/ClassStates';
import UseStateComp from './Component/State/UseStateComp';
import TodoList from './Component/State/TodoList/TodoList';
// Cycle de vie du composant & useEffect
import CycleVieComp from './Component/useEffect/CycleVieComp';
import UseEffectComp from './Component/useEffect/UseEffectComp';

function App() {

  return (
    <div className="container text-center">
      <h1>Basics Hooks</h1>
      <ClassStates />
      <hr />
      <UseStateComp />
      <hr />
      <TodoList />
      <hr className="text-danger"/>
      <hr className="text-danger"/>
      <hr className="text-danger"/>
      <CycleVieComp />
      <hr />
      <UseEffectComp />
    </div>
  
  );
}

export default App;
