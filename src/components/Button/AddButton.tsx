import React from 'react';
import { Button } from '@mui/material';
import './AddButton.css';

export const AddButton: React.FC = () => {
    return (
        <Button variant='contained' className='button'>
            Add Item
        </Button>
    )
}