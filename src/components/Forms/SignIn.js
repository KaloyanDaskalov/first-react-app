import React from 'react';
import useFormState from '../../store/formState';
import { actionType, emailValidation, checkLength, showErrorHandler } from '../../sharedTools/index';

import ErrorMessageElement from '../UI/ErrorMessage/ErrorMessage'
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import classes from './Forms.module.css';
// import { useAuth } from '../../store/Auth';

const SignIn = () => {
    const { email, password, dispatch, error, errorMessage } = useFormState();
    // const { signup } = useAuth();

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(email, password);

        dispatch({ type: 'INIT_ERROR' });

        if (!emailValidation(email)) {
            return dispatch({ type: 'ERROR', payload: 'invalid email' });
        }

        if (!checkLength(6, 10, password.length)) {
            return dispatch({ type: 'ERROR', payload: 'password must be at least 6 characters long' });
        }
    }

    function inputHandler(e) {
        dispatch({ type: actionType(e), payload: e.target.value });
    }

    return (
        <div className={classes.Container} >
            <header className={classes.Header}>
                <h2 className={classes.Heading}>Sign In</h2>
                <p className={classes.HeaderMessage}>
                    Not a member? <a href="#" className={classes.HeaderLink}>Sign Up Now</a>
                </p>
                <ErrorMessageElement showError={error} errorMessage={errorMessage} />
            </header>
            <form className={classes.Form} onSubmit={submitHandler}>
                <Input
                    getValue={inputHandler}
                    showError={showErrorHandler(error, errorMessage, 'email')}
                    attributes={{ type: 'text', placeholder: 'Email' }} />
                <Input
                    getValue={inputHandler}
                    showError={showErrorHandler(error, errorMessage, 'password')}
                    attributes={{ type: 'password', placeholder: 'Password' }} />
                <Button>Sign In</Button>
            </form>
        </div>
    );
}

export default SignIn;