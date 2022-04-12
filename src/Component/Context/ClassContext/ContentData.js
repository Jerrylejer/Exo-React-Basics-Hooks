import React from 'react';
import { MyContext, ColorContext } from './MyContext';

const ContentData = () => {
    return (
        <MyContext.Consumer>
            {(user) => {
                // console.log(user);
                return (
                    <ColorContext.Consumer>
                        {(color) => {
                            return (
                                <div style={{color: color}}>
                                    <ul>
                                    <h2 className="text-secondary">Context dans une Class Vs useContext Vs useState</h2>
                                        <p>Utilisation d'un Context de Class</p>
                                        <li>Nom: {user.name} </li>
                                        <li>Age: {user.age}</li>
                                    </ul>
                                </div>
                            );
                        }}
                    </ColorContext.Consumer>
                );
            }}
        </MyContext.Consumer>
    );
};

export default ContentData;
