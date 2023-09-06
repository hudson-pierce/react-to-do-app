import React, { useState } from 'react';
import { ListItem } from '../ListItem/ListItem';
import './ListContainer.css';
import { AddButton } from '../Button/AddButton';
import { AddTaskInput } from '../AddTaskInput/AddTaskInput';
import { AddTaskForm } from '../AddTaskForm/AddTaskForm';

type Props = {
}

interface ListItem {
    title: string
}

export const ListContainer: React.FC<Props> = ({}) => {
    return (
        <div className='list-container'>
            <AddTaskForm/>
            <ListItem title="Item1" completed={false}/>
            <ListItem title="Item2" completed={false}/>
        </div>
    );
}
