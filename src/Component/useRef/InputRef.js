import React, { useRef, useState, useEffect } from 'react';

const InputRef = () => {
    const [data, setData] = useState(null);
    // const [countC, setCountC] = useState(0);

    // useEffect(() => {
    //    setIntervalRef.current = setInterval(() => {
    //        setCountC(prevCountC => {
    //          return prevCountC + 1;
    //        })
    //     }, 1000);
    // }, []);

    const inputAccess = useRef(null);
    // console.log(inputAccess)
    // const setIntervalRef = useRef();

    const focusOn = () => {
        setData(inputAccess.current.value);
    };

    // const stopInc = () => {
    //   clearInterval(setIntervalRef.current)
    // }

    return (
        <div>
            <p>{data}</p>
            <input type='text' ref={inputAccess} />
            <button onClick={focusOn}>Focus</button>
            {/* <br />
            <br />
            <p>{countC}</p>
            <button onClick={stopInc}>Stop</button> */}
        </div>
    );
};

export default React.memo(InputRef);
