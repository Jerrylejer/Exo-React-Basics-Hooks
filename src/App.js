import React from 'react';
// state & useState
import ClassStates from './Component/State/ClassStates';
import UseStateComp from './Component/State/UseStateComp';
import TodoList from './Component/State/TodoList/TodoList';
// Cycle de vie du composant & useEffect
import CycleVieComp from './Component/useEffect/Montage&Update/CycleVieComp';
import UseEffectComp from './Component/useEffect/Montage&Update/UseEffectComp';
import UseEffectUnmount from './Component/useEffect/Démontage&Class/ClassComp';
import FunctionComp from './Component/useEffect/Démontage&useEffect/FunctionComp';

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
      <hr />
      <UseEffectUnmount />
      <hr />
      <FunctionComp />
    </div>
  );
}

export default App;
