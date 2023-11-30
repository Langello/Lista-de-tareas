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
        <li>
            <span style={{ textDecoration: completed ? 'line-through' : 'none' }}
                className='task-name'>
                {task.name}
            </span>
            <div className='task-buttons'>
                <button className="button-completar" onClick={toggleCompleted}>
                    <span className="text">{completed ? 'Deshacer' : 'Completar'}</span>
                    <span className="icon">{completed ? 
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512"><path d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"/></svg>
                    : 
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>}
                    </span>
                        
                    
                </button>
                <button className="button-eliminar" onClick={deleteTask}>
                    <span className="text">Eliminar</span>
                    <span className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                        </svg>
                    </span>
                </button>
            </div>
        </li>
    );
};

export default TaskItem;
