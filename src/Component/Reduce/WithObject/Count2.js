import React, { useReducer } from 'react';

// initialState se rapportant aux 2 objets
const initialState = {
    countOne: 0,
    count2: 0
};

// fonction reducer du useReducer qui accepte 2 paramètres
// action qui va changer le state et le state
const reducer = (state, action) => {

    switch (action.type) {
        case 'increment':
            return {...state, countOne: state.countOne + action.value};
        case 'decrement':
            return {...state, countOne: state.countOne - action.value};
        case 'increment2':
            return {...state, count2: state.count2 + action.value};
        case 'decrement2':
            return {...state, count2: state.count2 - action.value};
        case 'init':
            return initialState;

        default:
            return state;
    }
}

const Count2 = () => {
        // Se construit comme un use state mais paramètres prédéfinis en useReducer (1&2)
        const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <p>Compteur avec useReducer, plusieurs objets</p>
            <div className='row'>
                <div className='col-6'>
                    <h3>{count.countOne}</h3>
                    <button
                        className='btn btn-success m-3'
                        onClick={() => dispatch({type:'increment', value: 1})}
                    >
                        +
                    </button>
                    <button
                        className='btn btn-danger m-3'
                        onClick={() => dispatch({type:'decrement', value: 1})}
                    >
                        -
                    </button>
                </div>
                <div className='col-6'>
                    <h3>{count.count2}</h3>
                    <button
                        className='btn btn-success m-3'
                        onClick={() => dispatch({type:'increment2', value: 2})}
                    >
                        +
                    </button>
                    <button
                        className='btn btn-danger m-3'
                        onClick={() => dispatch({type:'decrement2', value: 2})}
                    >
                        -
                    </button>
                </div>
                <div className="col">
                <button
                        className='btn btn-secondary m-3 '
                        onClick={() => dispatch({type:'init'})}
                    >
                        init to 0
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Count2;
