import React, { useState, useCallback, useEffect, useMemo } from 'react';
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
import Button from './Component/useCallBack/Button';
import ChargeBars from './Component/useCallBack/ChargeBars';
// useMemo
import Profile3 from '../src/Component/useMemo/profile';
import axios from 'axios';
// useRef
import InputRef from '../src/Component/useRef/InputRef';
// useLayoutEffect
import Box from '../src/Component/useLayoutEffect/Box';

function App() {
    //todo module useContext
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

    //todo module useCallBack
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

    // Utilisation de useCallBAck en complément de ReactMemo pour optimiser les rendus non nécessaires
    // ReactMemo est inefficace sur les fonctions
    const changeValueX = useCallback((val) => {
        // console.log('Je suis dans changeValueX')
        chargeBarX.value < 100 &&
        setChargeBarX({ ...chargeBarX, value: chargeBarX.value + val });
    }, [chargeBarX])

    const changeValueY = useCallback((val) => {
        // console.log('Je suis dans changeValueY')
        chargeBarY.value < 100 &&
        setChargeBarY({ ...chargeBarY, value: chargeBarY.value + val });
    }, [chargeBarY])

    //todo useMemo
    // State du compteur
    const [countA, setCountA] = useState(1);
    // state du profile
    const [profileA, setProfileA] = useState({});
    // state pour le thème dark
    const [dark, setDark] = useState(false);

    // useEffect va aller chercher la data de JasonPlaceHolder
    useEffect(() => {
        // axios va chercher les infos
        axios.get(`https://jsonplaceholder.typicode.com/users/${countA}`)
        // useEffect attend le retour de la réponse (promesse) de l'Api
        .then((response) => {
            // Une fois reçue, on passe la data
            // console.log(response.data)
            setProfileA(response.data)
        })
        .catch((error) => { 
            console.log(error)
        })
        // Indiquer [countA] pour que l'effet se fasse au montage/update du countA
    },[countA]);
    
    const darker = () => {
        setDark(!dark)
        if(!dark) {
            document.body.classList.add("bg-dark")
        } else {
            document.body.classList.remove("bg-dark")
        }
    };

    const buttonTheme = dark ? "btn-light" : "btn-dark";

    // Ici useMemo va mémoriser la valeur de countA et surveiller tout changement
    const jsonOver = useMemo(() => {
        // console.log('je suis dans la fonction jsonOver')
        return countA > 10;
    }, [countA])

    // const jsonOver = () => {
    //     console.log('je suis dans la fonction jsonOver')
    //     return countA > 10;
    // }

    
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
            <ChargeBars text="chargeBarOne" count={chargeBarX.value} bgColor={chargeBarX.btnColor} />
            <Button
                btnColor={chargeBarX.btnColor}
                increment={chargeBarX.increment}
                fonction={changeValueX}
            >
                Count X
            </Button>
            <br />
            <ChargeBars text="chargeBarTwo" count={chargeBarY.value} bgColor={chargeBarY.btnColor} />
            <Button
                btnColor={chargeBarY.btnColor}
                increment={chargeBarY.increment}
                fonction={changeValueY}
            >
                Count y
            </Button>
            <hr className='text-danger' />
            <hr className='text-danger' />
            <hr className='text-danger' />
            <div className="container">
                <h2 className="text-secondary">useMemo()</h2>
                <br />
                <button className="btn btn-primary m-3" onClick={() => setCountA(countA +1)} >Increment {countA}</button>
                <button className={`btn ${buttonTheme} m-3`} onClick={darker} >Modifier</button>
            </div>
            {
                jsonOver && <div className="alert alert-danger" role="alert">Pas plus de 10 mon bon ami !!!</div>
            }
            <Profile3 count={countA} profile={profileA}/>
            <hr className='text-danger' />
            <hr className='text-danger' />
            <hr className='text-danger' />
            <div className="container">
            <h2 className="text-secondary">useRef()</h2>
                <InputRef />
            </div>
            <hr className='text-danger' />
            <hr className='text-danger' />
            <hr className='text-danger' />
            <div className="container">
            <h2 className="text-secondary">useLayoutEffect Vs useEffect ? Légers décalages de rendus !</h2>
                <Box />
            </div>
        </div>
    );
}

export default App;
