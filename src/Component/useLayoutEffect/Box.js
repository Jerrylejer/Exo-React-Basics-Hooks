import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import Content from './Content';

function Box() {
    // state de hauteur de la div
    const [height, setHeight] = useState(50);
    const [height2, setHeight2] = useState(50)
    // Ref sur la div
    const myDiv = useRef(null);
    const myDiv2 = useRef(null);
    const timeRef = useRef(0)
    const timeRef2 = useRef(0)

    // Visuellement, je ne constate aucune différence de rendu entre le useEffect et le useLayoutEffect 
    // Mais différences il y a pourtant (voir les console.log)
    useEffect(() => {
        if (myDiv.current.offsetHeight < 150) {
            setHeight(height + 120);
            // useLayoutEffect se lance après le rendu du DOM
            // temps écoulé entre le début du montage (timeRef.current) du component et le rendu DOM (performance.now)
            console.log(`Laps de temps useEffect: ${performance.now() - timeRef.current}`)
        }
    }, [height]);

    useLayoutEffect(() => {
        if (myDiv2.current.offsetHeight < 150) {
            setHeight2(height2 + 120);
            // useLayoutEffect se lance au rendu du DOM
            // temps écoulé entre le début du montage (timeRef2.current) du component et le rendu DOM (performance.now)
            console.log(`Laps de temps useLayoutEffect: ${performance.now() - timeRef2.current}`)
        }
    }, [height]);

    // timeRef au moment du montage du composant
    timeRef.current = performance.now();
    timeRef2.current = performance.now();

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
