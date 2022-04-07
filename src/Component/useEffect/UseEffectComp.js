import React, { useState, useEffect } from 'react';

const useEffectComp = () => {
    const [count, setCount] = useState(0);

    const [name, setName] = useState("");

    const incrementAction = () => {
      setCount(count +1)
    }
 
    // Le montage ET l'update se font directement dans le useEffect
    useEffect (() => {
        console.log('useEffect: Mise à jour du Title')
        document.title = `Page cliquée ${count}`
        //! ce dernier paramètre [count] fait office de prevState et détermine s'il y a changement ou non
        //! On optimise ainsi l'update à bon escient => sans [count], l'update se fait sur tous les évènements
        //todo Pour simuler un seul et unique update (componentDidMount) => on laisse le paramètre [] vide
    }, [count]);

    return (
        <div>
            <p>Mon useEffect compteur: {count}</p>
            <button className='btn btn-primary m-2' onClick={incrementAction}>
                Incrémentation
            </button>
            <input type="text" value={name} onChange={e => {setName(e.target.value)}}/>
        </div>
    );
};

export default useEffectComp;
