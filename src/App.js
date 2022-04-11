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
import {
    MyContext,
    ColorContext,
} from './Component/Context/ClassContext/MyContext';
// useContext
import Profile2 from './Component/Context/useContext/Profile2';
import {
    MyContext2,
    ColorContext2,
} from './Component/Context/useContext/MyContext2';
// useReducer
import Count from './Component/Reduce/SimpleString/Count';
import Count2 from './Component/Reduce/WithObject/Count2';
// useCallBack
import Button from './Component/useCallBack/SansUseCallBack/Button';
import ChargeBars from './Component/useCallBack/SansUseCallBack/ChargeBars';

function App() {
    // module useContext
    const [profile, setProfile] = useState({
        user: {
            name: 'Lisa',
            age: 8,
        },
    });

    const [profile2, setProfile2] = useState({
        user2: {
            name: 'Bart',
            age: 7,
        },
    });

    // module useCallBack
    const [chargeBarX, setChargeBarX] = useState({
        value: 0,
        btnColor: 'success',
        increment: 25,
    });

    const [chargeBarY, setChargeBarY] = useState({
        value: 0,
        btnColor: 'danger',
        increment: 35,
    });

    const changeValueX = (val) => {
        chargeBarX.value < 100 &&
        setChargeBarX({ ...chargeBarX, value: chargeBarX.value + val });
    };

    const changeValueY = (val) => {
        chargeBarY.value < 100 &&
        setChargeBarY({ ...chargeBarY, value: chargeBarY.value + val });
    };

    return (
        <div className='container text-center'>
            <h1>Basics Hooks</h1>
            <ClassStates />
            <hr />
            <UseStateComp />
            <hr />
            <TodoList />
            <hr className='text-danger' />
            <hr className='text-danger' />
            <hr className='text-danger' />
            <CycleVieComp />
            <hr />
            <UseEffectComp />
            <hr />
            <UseEffectUnmount />
            <hr />
            <FunctionComp />
            <hr className='text-danger' />
            <hr className='text-danger' />
            <hr className='text-danger' />
            <MyContext.Provider value={profile.user}>
                <ColorContext.Provider value={'red'}>
                    <Profile />
                </ColorContext.Provider>
            </MyContext.Provider>
            <hr className='text-danger' />
            <MyContext2.Provider value={profile2.user2}>
                <ColorContext2.Provider value={'blue'}>
                    <Profile2 />
                </ColorContext2.Provider>
            </MyContext2.Provider>
            <hr className='text-danger' />
            <hr className='text-danger' />
            <hr className='text-danger' />
            <Count />
            <hr className='text-danger' />
            <Count2 />
            <hr className='text-danger' />
            <hr className='text-danger' />
            <hr className='text-danger' />
            <ChargeBars count={chargeBarX.value} bgColor={chargeBarX.btnColor} />
            <Button
                btnColor={chargeBarX.btnColor}
                increment={chargeBarX.increment}
                fonction={changeValueX}
            >
                Count X
            </Button>
            <br />
            <ChargeBars count={chargeBarY.value} bgColor={chargeBarY.btnColor} />
            <Button
                btnColor={chargeBarY.btnColor}
                increment={chargeBarY.increment}
                fonction={changeValueY}
            >
                Count y
            </Button>
        </div>
    );
}

export default App;
