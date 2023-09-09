import React, { useState } from 'react';
import './ListContainer.css';
import { AddTaskInput } from '../AddTaskInput/AddTaskInput';
import { Task } from '../ListItem/Task';

export const ListContainer: React.FC = () => {
    const [tasks, setTasks] = useState<{ title: string; completed: boolean }[]>([]);

    const addTask = (taskName: string) => {
        setTasks([...tasks, { title: taskName, completed: false }]);
    };

    const deleteTask = (index: number) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    const editTask = (index: number, newTitle: string) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].title = newTitle;
        setTasks(updatedTasks);
    };

    const toggleComplete = (index: number) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    };

    return (
        <div className='list-container'>
            <AddTaskInput onSubmit={addTask} />
            {tasks.map((task, index) => (
                <Task
                    key={index}
                    title={task.title}
                    completed={task.completed}
                    onDelete={() => deleteTask(index)}
                    onEdit={(newTitle) => editTask(index, newTitle)}
                    onToggleComplete={() => toggleComplete(index)}
                />
            ))}
        </div>
    );
}
