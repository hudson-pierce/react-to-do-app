import React from 'react';
import './Header.css';

interface Props {
    title: string;
}

export const Header: React.FC<Props> = ({ title }) => {
    return (
        <h1 className='header'>
            {title}
        </h1>
    )
}
