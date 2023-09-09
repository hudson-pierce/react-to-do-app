import React, { useState } from 'react';
import './AddTaskInput.css';
import { TextField } from '@mui/material';

type Props = {
    onSubmit: (taskName: string) => void;
}

export const AddTaskInput: React.FC<Props> = ({ onSubmit }) => {
    const [taskName, setTaskName] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTaskName(event.target.value);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && taskName.trim() !== '') {
            onSubmit(taskName);
            setTaskName('');
        }
    };

    return (
        <div>
            <TextField
                label="Add a task"
                variant="outlined"
                className='textfield'
                value={taskName}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
            />
        </div>
    );
}
