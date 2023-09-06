import React from 'react';
import './AddTaskForm.css';
import { AddTaskInput } from '../AddTaskInput/AddTaskInput';
import { AddButton } from '../Button/AddButton';

export const AddTaskForm: React.FC = () => {
    return (
        <div className='form-container'>
            <AddTaskInput/>
            <AddButton />
        </div>
    )
}
