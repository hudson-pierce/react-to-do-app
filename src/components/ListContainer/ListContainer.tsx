import React from 'react';
import './ListContainer.css';

type Props = {
    children: JSX.Element
}

export const ListContainer: React.FC<Props> = ({ children }) => {
    return (
        <div className='list-container'>
            {children}
        </div>
    );
}
