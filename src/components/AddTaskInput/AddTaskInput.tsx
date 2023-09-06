import React from 'react';
import './AddTaskInput.css';
import { TextField } from '@mui/material';

export const AddTaskInput: React.FC = () => {
    return (
        <TextField id="outlined-basic" label="Outlined" variant="outlined" className='textfield'/>
    )
}