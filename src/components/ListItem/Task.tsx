import React, { useState } from 'react';
import {
    ListItem,
    ListItemText,
    IconButton,
    TextField,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './Task.css';

type Props = {
    title: string;
    completed: boolean;
    onDelete: () => void;
    onEdit: (newTitle: string) => void;
    onToggleComplete: () => void;
};

export const Task: React.FC<Props> = ({
    title,
    completed,
    onDelete,
    onEdit,
    onToggleComplete,
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(title);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveEdit = () => {
        if (newTitle.trim() !== '') {
            onEdit(newTitle);
            setIsEditing(false);
        }
    };

    const handleCancelEdit = () => {
        setNewTitle(title);
        setIsEditing(false);
    };

    const handleToggleComplete = () => {
        onToggleComplete();
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && newTitle.trim() !== '') {
            handleSaveEdit();
        }
    };

    return (
        <ListItem className='list-item'>
            {isEditing ? (
                <TextField
                    className='textfield-input'
                    fullWidth
                    variant="outlined"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    onKeyDown={handleKeyPress}
                />
            ) : (
                <>
                    <IconButton
                        // className={`checkmark-icon`}
                        // make color gray if not completed and green if completed
                        className={`checkmark-icon ${completed ? 'completed' : 'not-completed'}`}
                        edge="end"
                        aria-label="complete"
                        onClick={handleToggleComplete}
                    >
                        {completed ? <CheckCircleIcon /> : <CheckCircleOutlineIcon />}
                    </IconButton>
                    <ListItemText
                        primary={title}
                        className="text"
                        style={{ textDecoration: completed ? 'line-through' : 'none' }}
                    />
                    <IconButton
                        style={{ marginRight: '8px' }}
                        className="edit-button"
                        edge="end"
                        aria-label="edit"
                        onClick={handleEditClick}
                    >
                        <EditIcon />
                    </IconButton>

                    <IconButton
                        style={{ marginRight: '8px' }}
                        className="delete-button"
                        edge="end"
                        aria-label="delete"
                        onClick={onDelete}
                    >
                        <DeleteIcon />
                    </IconButton>
                </>
            )}
        </ListItem>
    );
};
