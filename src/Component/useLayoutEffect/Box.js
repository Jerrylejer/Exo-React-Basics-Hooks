import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import Content from './Content';

function Box() {
    // state de hauteur de la div
    const [height, setHeight] = useState(50);
    const [height2, setHeight2] = useState(50)
    // Ref sur la div
    const myDiv = useRef(null);
    const myDiv2 = useRef(null);

    // Je ne constate aucune différence de rendu entre le useEffect qui se lance après le rendu du DOM
    //  et le useLayoutEffect qui se lance au rendu du DOM
    useEffect(() => {
        if (myDiv.current.offsetHeight < 150) {
            setHeight(height + 120);
        }
    }, [height]);

    useLayoutEffect(() => {
        if (myDiv2.current.offsetHeight < 150) {
            setHeight2(height2 + 120);
        }
    }, [height]);

    const boxStyle = {
        width: '400px',
        height: `${height}px`,
        margin: '0 auto',
        backgroundColor: 'grey',
    };

    const boxStyle2 = {
        width: '400px',
        height: `${height}px`,
        margin: '0 auto',
        backgroundColor: 'red',
    };

    return (
        <>
            <div style={boxStyle} ref={myDiv}>
                {`height = ${height}`}
                <Content />
            </div>
            <br />
            <br />
            <div style={boxStyle2} ref={myDiv2}>
                {`height = ${height2}`}
                <Content />
            </div>
        </>
    );
}

export default Box;
