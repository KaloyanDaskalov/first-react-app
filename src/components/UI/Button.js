import React from 'react';
import classes from './Button.module.css';

const button = ({ clicked, children }) => (
    <button className={classes.Btn} onClick={clicked} >{children}</button>
);

export default button;
