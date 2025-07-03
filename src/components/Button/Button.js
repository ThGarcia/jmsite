import React from 'react';
import './Button.css';

const Button = ({ onClick, text }) => {
    return (
        <div className='button'>
            <button className='button-bg' onClick={onClick}><span className='button-text'>{text}</span></button>
        </div>
    );
};

export default Button;
