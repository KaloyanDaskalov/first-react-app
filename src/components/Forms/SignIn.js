import React from 'react';
import useFormState from '../../store/formState';
import { actionType, emailValidation, checkLength, showErrorHandler } from '../../sharedTools/index';
import { useAuth } from '../../store/Auth';
import { Link, useHistory } from 'react-router-dom';

import ErrorMessageElement from '../UI/ErrorMessage/ErrorMessage'
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import classes from './Forms.module.css';

const SignIn = () => {
    const { email, password, dispatch, error, errorMessage } = useFormState();
    const { signIn } = useAuth();
    const history = useHistory();

    const submitHandler = async (event) => {
        event.preventDefault();

        dispatch({ type: 'INIT_ERROR' });

        if (!emailValidation(email)) {
            return dispatch({ type: 'ERROR', payload: 'invalid email' });
        }

        if (!checkLength(6, 10, password.length)) {
            return dispatch({ type: 'ERROR', payload: 'password must be at least 6 characters long' });
        }
        try {
            await signIn(email, password);
            history.push('/');
        } catch (err) {
            dispatch({ type: 'ERROR', payload: err.message });
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
                    Not a member? <Link to="/signup" className={classes.HeaderLink}>Sign Up Now</Link>
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
                <p className={classes.HeaderMessage} style={{ marginTop: '2rem' }}>
                    <Link to="/forgot-password" className={classes.HeaderLink}>Forgot Password</Link>
                </p>
            </form>
        </div>
    );
}

export default SignIn;