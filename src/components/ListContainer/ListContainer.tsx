import React, { useState } from 'react';
import { ListItem } from '../ListItem/ListItem';
import './ListContainer.css';
import { AddButton } from '../Button/AddButton';

type Props = {
}

interface ListItem {
    title: string
}

export const ListContainer: React.FC<Props> = ({}) => {
    return (
        <div className='list-container'>
            <AddButton/>
            <ListItem title="Item1" completed={false}/>
            <ListItem title="Item2" completed={false}/>
        </div>
    );
}
