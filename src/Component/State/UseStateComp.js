import React, { useState } from 'react';

const UseStateComp = () => {
    const [counter, setCounter] = useState(0);

    // const handleClick = () => {
    //     setCounter(counter + 1);
    // };

    //   const handleClick = () => {
    //     setCounter(prevCounter => prevCounter +1);
    // };

    return (
        <div>
            <p>Function State: {counter}</p>
            <button
                className='btn btn-primary'
                onClick={() => {
                    setCounter(prevCounter => prevCounter + 1);
                }}
            >
                useState
            </button>
        </div>
    );
};

export default UseStateComp;
