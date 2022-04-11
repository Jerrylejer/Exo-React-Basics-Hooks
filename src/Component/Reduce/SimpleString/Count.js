import React, { useReducer} from 'react'

// initialState de useReducer (second paramètre)
const initialState = 0;
// fonction reducer du useReducer qui accepte 2 paramètres
// action qui va changer le state et le state
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state +1;
        case 'decrement':
            return state -1;
        case 'init':
            return initialState;

        default:
            return state;
    }
}

const Count = () => {
    // Se construit comme un use state mais paramètres prédéfinis en useReducer (1&2)
    const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
         <h2 className="text-secondary">Reduce dans une Class Vs useReducer</h2>
        <p>Compteur avec useReducer et strings</p>
        <h3>{count}</h3>
        <button className="btn btn-success m-3" onClick={() => dispatch('increment')}>+</button>
        <button className="btn btn-danger m-3" onClick={() => dispatch('decrement')}>-</button>
        <br />
        <button className="btn btn-secondary m-3" onClick={() => dispatch('init')}>init to 0</button>
    </div>
  )
}

export default Count