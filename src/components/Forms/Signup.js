import React, { useState } from 'react';
import useFormState from '../../store/formState';
import { useAuth } from '../../store/Auth';
import { actionType, emailValidation, checkLength } from '../../sharedTools/index';

import classes from './Forms.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import ErrorMessage from '../UI/ErrorMessage/ErrorMessage';


const Signup = () => {
    const [email, password, dispatch, confirm, error, errorMessage] = useFormState();
    const { signup } = useAuth();
    const [errorMap, setErrorMap] = useState({ email: false, password: false, confirm: false });

    const submitHandler = async (event) => {
        event.preventDefault();

        dispatch({ type: 'INIT_ERROR' });
        setErrorMap({ email: false, password: false, confirm: false });
        console.log(email, password, confirm);
        if (!emailValidation(email)) {
            setErrorMap({ email: true, password: false, confirm: false });
            return dispatch({ type: 'ERROR', payload: 'invalid email' });
        }

        if (!checkLength(6, 10, password.length)) {
            setErrorMap({ email: false, password: true, confirm: false });
            return dispatch({ type: 'ERROR', payload: 'password must be at least 6 characters long' });
        }

        if (password !== confirm) {
            setErrorMap({ email: false, password: false, confirm: true });
            return dispatch({ type: 'ERROR', payload: 'password and confirm password don\'t match' });
        }
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
            <ErrorMessage showError={error} errorMessage={errorMessage} />
        </header>
        <form className={classes.Form} onSubmit={submitHandler} >
            <Input getValue={inputHandler} showError={errorMap.email} attributes={{ type: 'text', placeholder: 'Email' }} />
            <Input getValue={inputHandler} showError={errorMap.password} attributes={{ type: 'password', placeholder: 'Password' }} />
            <Input getValue={inputHandler} showError={errorMap.confirm} attributes={{ type: 'password', placeholder: 'Confirm Password' }} />
            <p className={classes.Instructions}>Password must be at least 6 characters long</p>
            <Button>Sign Up</Button>
        </form>
    </div>);
};

export default Signup;