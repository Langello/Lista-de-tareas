/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  // Funciones para manejar eventos
  const handleComplete = (taskId) => {
    // Actualizar el estado para marcar como completada la tarea
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDelete = (taskId) => {
    // Filtrar las tareas para eliminar la seleccionada
    setTasks(prevTasks =>
      prevTasks.filter(task => task.id !== taskId)
    );
  };

  const addTask = (taskName) => {
    // Agregar una nueva tarea
    const newTask = {
      id: tasks.length + 1,
      name: taskName,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  useEffect(() => {
    // Actualizar localStorage cada vez que cambie el estado de las tareas
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className='container'>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        handleComplete={handleComplete}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
