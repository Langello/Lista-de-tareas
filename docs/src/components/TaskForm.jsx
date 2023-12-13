/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
    const [taskName, setTaskName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskName.trim() !== '') {
            addTask(taskName);
            setTaskName('');
        }
    };

    return (
        <>
            <button className="button" data-text="Awesome">
                <span className="actual-text">&nbsp;Lista&nbsp;de&nbsp;Tareas&nbsp;</span>
                <span aria-hidden="true" className="hover-text">&nbsp;Lista&nbsp;de&nbsp;Tareas&nbsp;</span>
            </button>
            <form onSubmit={handleSubmit} className='task-form'>
                <div className='input-wrapper'>
                    <input
                        type="text"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                        placeholder='Hacer el trabajo integrador....'
                    />
                </div>
                <button className='button-agregar' type="submit">Agregar</button>
            </form>
        </>
    );
};

export default TaskForm;
