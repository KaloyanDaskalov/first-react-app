import React from 'react';
import useFormState from '../../store/formState';
import { actionType, emailValidation, showErrorHandler } from '../../sharedTools/index';
import { useAuth } from '../../store/Auth';
import { Link } from 'react-router-dom';

import ErrorMessageElement from '../UI/ErrorMessage/ErrorMessage'
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import classes from './Forms.module.css';

const ForgotPassword = () => {
    const { email, dispatch, error, errorMessage } = useFormState();
    const { resetPassword } = useAuth();

    const submitHandler = async (event) => {
        event.preventDefault();

        dispatch({ type: 'INIT_ERROR' });

        if (!emailValidation(email)) {
            return dispatch({ type: 'ERROR', payload: 'invalid email' });
        }

        try {
            await resetPassword(email);
            dispatch({ type: 'ERROR', payload: 'Success! check your mail for further instructions' });
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
                <h2 className={classes.Heading}>Password Reset</h2>
                <ErrorMessageElement showError={error} errorMessage={errorMessage} />
            </header>
            <form className={classes.Form} onSubmit={submitHandler}>
                <Input
                    getValue={inputHandler}
                    showError={showErrorHandler(error, errorMessage, 'email')}
                    attributes={{ type: 'text', placeholder: 'Email' }} />
                <Button>Reset Password</Button>
                <p className={classes.HeaderMessage} style={{ marginTop: '2rem' }}>
                    <Link to="/signin" className={classes.HeaderLink}>Sign In</Link>
                </p>
            </form>
        </div>
    );
}

export default ForgotPassword;