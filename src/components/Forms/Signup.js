import React from 'react';
import useFormState from '../../store/formState';
import { useAuth } from '../../store/Auth';
import { actionType, emailValidation } from '../../sharedTools/index';

import classes from './Forms.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';


const Signup = () => {
    const [email, password, dispatch, confirm] = useFormState();
    const { signup } = useAuth();

    const submitHandler = async (event) => {
        event.preventDefault();
        console.log(email, password, confirm);
        console.log(emailValidation(email));
        // try {
        //     await signup(email, password);
        // } catch (err) {
        //     console.log(err);
        // }
    };

    function inputHandler(e) {
        dispatch({ type: actionType(e), payload: e.target.value });
    }

    return (<div className={classes.Container}>
        <header className={classes.Header}>
            <h2 className={classes.Heading}>Sign Up</h2>
            <p className={classes.HeaderMessage}>
                Already a member? <a href="#" className={classes.HeaderLink}>Log In</a>
            </p>
            <p className={classes.Message}>Error Message</p>
        </header>
        <form className={classes.Form} onSubmit={submitHandler} >
            <Input getValue={inputHandler} showError={false} attributes={{ type: 'text', placeholder: 'Email' }} />
            <Input getValue={inputHandler} showError attributes={{ type: 'password', placeholder: 'Password' }} />
            <Input getValue={inputHandler} showError attributes={{ type: 'password', placeholder: 'Confirm Password' }} />
            <p className={classes.Instructions}>Password must be at least 6 characters long</p>
            <Button>Sign Up</Button>
        </form>
    </div>);
};

export default Signup;