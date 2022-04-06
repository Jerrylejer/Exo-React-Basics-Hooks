import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddTask from './AddTask';

const TodoList = () => {
    const [task, setTask] = useState([
        { id: 1, task: 'Réviser le useState' },
        { id: 2, task: 'Réviser le useEffect' },
        { id: 3, task: 'Réviser le useReducer' },
        { id: 4, task: 'Réviser le useCallBack' },
        { id: 5, task: 'Réviser le useMemo' },
    ]);

    // State qui gère l'input vide à la soumission
    const [empty, setEmpty] = useState(false);

    //todo (2) je charge "setTask" avec la liste existante (spread) + le nouvel objet (en paramètre la nouvelle tâche)
    const addNewTask = (newTask) => {

        //* 1-condition qui déclenche ou non la fonction de nouvelle tâche lors du submit
        if (newTask !== '') {
            //* 2-Chaine de caractère dans l'input => Fonction ok et state "empty" s'initialise à false
            setEmpty(false);

            setTask([
                ...task,
                {
                    id: uuidv4(),
                    task: newTask,
                },
            ]);
        } else {
            //* 3-input vide => Fonction bloquée, pas de nouvelle tache, state "empty" s'initialise à true
            setEmpty(true);
        }
    };

    //* 4-initialisation d'une variable "emptyWarning" qui instancie une alerte dans le DOM
    const emptyWarning = empty && (
        <div class='alert alert-danger' role='alert'>
            Il faut indiquer une nouvelle tâche !
        </div>
    );

    //todo (3) je passe la fonction "addNewTask" en props à <AddTask />
    return (
        <div>
            <p>
                <strong>TodoList:</strong> Nous avons {task.length} tâches à
                effectuer
            </p>
            {emptyWarning}
            <ul className='list-group'>
                {task.map((item) => {
                    return (
                        <li key={item.id} className='list-group-item'>
                            {item.task}
                        </li>
                    );
                })}
            </ul>
            <br />
            <AddTask addNewTask={addNewTask} />
        </div>
    );
};

export default TodoList;
