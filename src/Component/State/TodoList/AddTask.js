import React, { useState } from 'react';

const AddTask = ({ addNewTask }) => {

    const [newTask, setNewTask] = useState('');

//todo (4) Je crée la fonction qui ajoute la nouvelle tâche
    const submitTask = (e) => {
        e.preventDefault();
        // console.log('ok');
        //todo (5) Je récupère "addNewTask" et lui passe le paramètre "newTask"
        addNewTask(newTask);
        // Je vide l'input
        setNewTask('')
    };

    const addOneTask = (e) => {
        // Je récupère la valeur de l'input
        const task = e.target.value;
        // Je la charge dans le useState
        setNewTask(task);
        //todo (1) => Je récupère la valeur => Il faut la passer à TodoList maintenant
    };

    //todo (6) => "submitTask" se lance au submit du formulaire
    return (
        <>
            <form className='form-group' onSubmit={submitTask}>
                <div className='input-group'>
                    <input
                        type='text'
                        className='form-control'
                        placeholder="J'énonce une tâche"
                        aria-label='Username'
                        aria-describedby='input-group-right'
                        value={newTask}
                        onChange={addOneTask}
                    />
                    <button type='submit'> Ajouter une tâche</button>
                </div>
            </form>
        </>
    );
};

export default AddTask;
