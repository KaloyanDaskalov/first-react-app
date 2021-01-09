import React, { useState } from 'react';
import classes from './Forms.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(email, password, confirm);
    };

    return (<div className={classes.Container}>
        <header className={classes.Header}>
            <h2 className={classes.Heading}>Sign Up</h2>
            <p className={classes.HeaderMessage}>
                Already a member? <a href="#" className={classes.HeaderLink}>Log In</a>
            </p>
            <p className={classes.Message}>Error Message</p>
        </header>
        <form className={classes.Form} onSubmit={submitHandler} >
            <Input getValue={(e) => setEmail(e.target.value)} showError={false} attributes={{ type: 'text', placeholder: 'Email' }} />
            <Input getValue={(e) => setPassword(e.target.value)} showError attributes={{ type: 'password', placeholder: 'Password' }} />
            <Input getValue={(e) => setConfirm(e.target.value)} showError attributes={{ type: 'password', placeholder: 'Confirm Password' }} />
            <p className={classes.Instructions}>Password must be at least 6 characters</p>
            <Button>Sign Up</Button>
        </form>
    </div>);
};

export default Signup;