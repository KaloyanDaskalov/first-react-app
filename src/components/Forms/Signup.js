import React from 'react';
import classes from './Forms.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

const signup = () => (
    <div className={classes.Container}>
        <header className={classes.Header}>
            <h2 className={classes.Heading}>Sign Up</h2>
            <p className={classes.HeaderMessage}>
                Already a member? <a href="#" className={classes.HeaderLink}>Log In</a>
            </p>
            <p className={classes.Message}>Password must be 4 to 10 characters</p>
        </header>
        <form className={classes.Form}>
            <input className={classes.Input} type="text" placeholder="Email" />
            <input className={classes.Input} type="password" placeholder="Password" />
            <input className={classes.Input} type="password" placeholder="Confirm Password" />
            <Button>Sign Up</Button>
        </form>
    </div>
);

export default signup;