import React from 'react';
import classes from './Input.module.css';

const input = (props) => {
    const classList = [classes.Input];

    if (props.showError) {
        classList.push(classes.Error);
    }

    return (
        <input className={classList.join(' ')} onChange={props.getValue}  {...props.attributes} />
    );
}

export default input;