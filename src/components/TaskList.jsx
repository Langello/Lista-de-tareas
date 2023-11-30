/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, handleComplete, handleDelete }) => {
    return (
        <div className='task-list'>
            <ul>
                {tasks.map(task => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        handleComplete={handleComplete}
                        handleDelete={handleDelete}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
