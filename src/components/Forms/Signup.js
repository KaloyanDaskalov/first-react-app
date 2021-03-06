import React from 'react';
import useFormState from '../../store/formState';
import { useAuth } from '../../store/Auth';
import { actionType, emailValidation, checkLength, showErrorHandler } from '../../sharedTools/index';
import { Link, useHistory } from 'react-router-dom';

import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import ErrorMessageElement from '../UI/ErrorMessage/ErrorMessage';
import classes from './Forms.module.css';


const Signup = () => {
    const { email, password, dispatch, confirm, error, errorMessage } = useFormState();
    const { signup } = useAuth();
    const history = useHistory();

    const submitHandler = async (event) => {
        event.preventDefault();

        dispatch({ type: 'INIT_ERROR' });
        console.log(email, password, confirm);
        if (!emailValidation(email)) {
            return dispatch({ type: 'ERROR', payload: 'invalid email' });
        }

        if (!checkLength(6, 10, password.length)) {
            return dispatch({ type: 'ERROR', payload: 'password must be at least 6 characters long' });
        }

        if (password !== confirm) {
            return dispatch({ type: 'ERROR', payload: 'password and confirm password don\'t match' });
        }
        try {
            await signup(email, password);
            history.push('/');
        } catch (err) {
            dispatch({ type: 'ERROR', payload: err.message });
        }
    };

    function inputHandler(e) {
        dispatch({ type: actionType(e), payload: e.target.value });
    }

    return (<div className={classes.Container}>
        <header className={classes.Header}>
            <h2 className={classes.Heading}>Sign Up</h2>
            <p className={classes.HeaderMessage}>
                Already a member? <Link to="/signin" className={classes.HeaderLink}>Log In</Link>
            </p>
            <ErrorMessageElement showError={error} errorMessage={errorMessage} />
        </header>
        <form className={classes.Form} onSubmit={submitHandler} >
            <Input
                getValue={inputHandler}
                showError={showErrorHandler(error, errorMessage, 'email')}
                attributes={{ type: 'text', placeholder: 'Email' }} />
            <Input
                getValue={inputHandler}
                showError={showErrorHandler(error, errorMessage, 'password')}
                attributes={{ type: 'password', placeholder: 'Password' }} />
            <Input
                getValue={inputHandler}
                showError={showErrorHandler(error, errorMessage, 'password')}
                attributes={{ type: 'password', placeholder: 'Confirm Password' }} />
            <p className={classes.Instructions}>Password must be at least 6 characters long</p>
            <Button>Sign Up</Button>
        </form>
    </div>);
};

export default Signup;