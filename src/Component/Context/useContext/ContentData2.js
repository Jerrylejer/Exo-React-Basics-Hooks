import React, { useContext } from 'react';
import { MyContext2, ColorContext2 } from './MyContext2';

const ContentData2 = () => {
    const user2 = useContext(MyContext2);
    const color2 = useContext(ColorContext2);
    // console.log(user2)
    return (
        <div style={{ color: color2 }}>
            <ul>
                <p>Utilisation du useContext</p>
                <li>Nom: {user2.name} </li>
                <li>Age: {user2.age}</li>
            </ul>
        </div>
    );
};

export default ContentData2;
