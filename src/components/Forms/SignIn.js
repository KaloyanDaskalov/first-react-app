import React, { useState } from 'react';
import classes from './Forms.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import { emailValidation } from '../../sharedTools/index';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(emailValidation(email), emailValidation(password));
    }

    return (
        <div className={classes.Container} >
            <header className={classes.Header}>
                <h2 className={classes.Heading}>Sign In</h2>
                <p className={classes.HeaderMessage}>
                    Not a member? <a href="#" className={classes.HeaderLink}>Sign Up Now</a>
                </p>
                <p className={classes.Message}>Error Message</p>
            </header>
            <form className={classes.Form} onSubmit={submitHandler}>
                <Input getValue={(e) => setEmail(e.target.value)} showError attributes={{ type: 'text', placeholder: 'Email' }} />
                <Input getValue={(e) => setPassword(e.target.value)} showError attributes={{ type: 'password', placeholder: 'Password' }} />
                <Button>Sign In</Button>
            </form>
        </div>
    );
}

export default SignIn;