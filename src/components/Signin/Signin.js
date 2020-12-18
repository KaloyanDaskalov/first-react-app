import React from 'react';
import classes from './Signin.module.css';
import Button from '../UI/Button';
import Input from '../UI/Input';

const signin = () => (
    <div className={classes.Container}>
        <header className={classes.Header}>
            <h2 className={classes.Heading}>Sign In</h2>
            <p className={classes.HeaderMessage}>
                Not a member? <a href="#" className={classes.HeaderLink}>Sign Up Now</a>
            </p>
            <p className={classes.Message}>Error Message</p>
        </header>
        <form className={classes.Form}>
            <input className={classes.Input} type="text" placeholder="Email" />
            <input className={classes.Input} type="password" placeholder="Password" />
            <Input class={false} type='text' placeholder='My custom input' />
            <Button>Sign In</Button>
        </form>
    </div>
);

export default signin;