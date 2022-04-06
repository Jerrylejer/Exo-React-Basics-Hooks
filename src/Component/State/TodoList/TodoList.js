import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddTask from "./AddTask";

const TodoList = () => {
    const [task, setTask] = useState([
        { id: 1, task: 'Réviser le useState' },
        { id: 2, task: 'Réviser le useEffect' },
        { id: 3, task: 'Réviser le useReducer' },
        { id: 4, task: 'Réviser le useCallBack' },
        { id: 5, task: 'Réviser le useMemo' },
    ]);

//todo (2) je charge "setTask" avec la liste existante (spread) + le nouvel objet (en paramètre la nouvelle tâche)
const addNewTask = (newTask) => {
    setTask([
        ...task, {
            id: uuidv4(),
            task: newTask
        }
    ])

}
//todo (3) je passe la fonction "addNewTask" en props à <AddTask /> 
    return (
        <div>
            <p><strong>TodoList:</strong> Nous avons {task.length} tâches à effectuer</p>
            <ul className="list-group">
                {task.map((item) => {
                    return <li key={item.id} className="list-group-item">{item.task}</li>;
                })}
            </ul>
            <br />
            <AddTask addNewTask={addNewTask}/>
        </div>
    );
};

export default TodoList;
