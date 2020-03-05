import React from 'react';

const Button = ([{props,styleClass, value, onClick}]) => (
    <button className={`btn ${styleClass}`} onClick={onClick()}> 
        {props.children}
    </button>
)
export default Button;