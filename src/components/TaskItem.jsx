/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const TaskItem = ({ task, handleComplete, handleDelete }) => {
    const [completed, setCompleted] = useState(false);

    const toggleCompleted = () => {
        setCompleted(!completed);
        handleComplete(task.id);
    };

    const deleteTask = () => {
        handleDelete(task.id);
    };

    return (
        <li style={{ textDecoration: completed ? 'line-through' : 'none' }}>
            {task.name}
            <div>
                <button className='button-completar' onClick={toggleCompleted}>
                    {completed ? 'Deshacer' : 'Completar'}
                </button>
                <button className='button-eliminar' onClick={deleteTask}>Eliminar</button>
            </div>
        </li>
    );
};

export default TaskItem;
