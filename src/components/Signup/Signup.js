import React from 'react';
import classes from './Signup.module.css';

const signup = () => (
    <div className={classes.Container}>
        <header className={classes.Header}>
            <h2 className={classes.Heading}>Sign Up</h2>
            <p className={classes.HeaderMessage}>
                Already a member? <a href="#" className={classes.HeaderLink}>Log In</a>
            </p>
            <p className={classes.Message}>Error Message</p>
        </header>
        <form className={classes.Form}>
            <input className={classes.Input} type="text" placeholder="Email" />
            <input className={classes.Input} type="password" placeholder="Password" />
            <input className={classes.Input} type="password" placeholder="Confirm Password" />
            <button type="submit" className={classes.Btn}>Sign Up</button>
        </form>
    </div>
);

export default signup;