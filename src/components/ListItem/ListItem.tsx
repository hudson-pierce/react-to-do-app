import React from 'react';
import './ListItem.css';

type Props = {
    title: string,
    completed: boolean
}

export const ListItem: React.FC<Props> = ({title, completed}) => {
    return (
        <div className='list-item'>
            {title}
        </div>
    );
}