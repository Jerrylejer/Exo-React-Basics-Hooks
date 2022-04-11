import React, { useState } from 'react';
// state & useState
import ClassStates from './Component/State/ClassStates';
import UseStateComp from './Component/State/UseStateComp';
import TodoList from './Component/State/TodoList/TodoList';
// Cycle de vie du composant & useEffect
import CycleVieComp from './Component/useEffect/Montage&Update/CycleVieComp';
import UseEffectComp from './Component/useEffect/Montage&Update/UseEffectComp';
import UseEffectUnmount from './Component/useEffect/Démontage&Class/ClassComp';
import FunctionComp from './Component/useEffect/Démontage&useEffect/FunctionComp';
// Contexte dans une class
import Profile from './Component/Context/ClassContext/Profile';
import { MyContext, ColorContext } from './Component/Context/ClassContext/MyContext';
// useContext
import Profile2 from './Component/Context/useContext/Profile2';
import { MyContext2, ColorContext2 } from './Component/Context/useContext/MyContext2';

function App() {

  const [profile, setProfile ] = useState(
    {user: {
      name: 'Lisa',
      age: 8
    }}
  )

  const [profile2, setProfile2 ] = useState(
    {user2: {
      name: 'Bart',
      age: 7
    }}
  )

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
      <hr className="text-danger"/>
      <hr className="text-danger"/>
      <hr className="text-danger"/>
      <MyContext.Provider value={profile.user}>
        <ColorContext.Provider value={'red'}>
          <Profile />
        </ColorContext.Provider>
      </MyContext.Provider>
      <hr className="text-danger"/>
      <MyContext2.Provider value={profile2.user2}>
        <ColorContext2.Provider value={'blue'}>
          <Profile2 />
        </ColorContext2.Provider>
      </MyContext2.Provider>
    </div>
  );
}

export default App;
