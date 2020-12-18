import React from 'react';
import classes from './Input.module.css';

const input = (props) => {
    const classList = [classes.Input];

    if (props.class) {
        classList.push(classes.Error);
    }

    return (
        <input className={classList.join(' ')} type={props.type} placeholder={props.placeholder} />
    );
}

export default input;