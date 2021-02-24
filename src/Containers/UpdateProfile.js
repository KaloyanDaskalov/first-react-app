import React, { useEffect } from 'react';
import useFormState from '../store/formState';
import { useAuth } from '../store/Auth';
import { actionType, emailValidation, checkLength, showErrorHandler } from '../sharedTools/index';
import { Link, useHistory } from 'react-router-dom';

import Button from '../components/UI/Button/Button';
import Input from '../components/UI/Input/Input';
import ErrorMessageElement from '../components/UI/ErrorMessage/ErrorMessage';
import classes from '../components/Forms/Forms.module.css';


const UpdateProfile = () => {
    const { email, password, dispatch, confirm, error, errorMessage } = useFormState();
    const { user, updateEmail, updatePassword } = useAuth();
    const history = useHistory();
    const promises = [];

    const submitHandler = (event) => {
        event.preventDefault();

        dispatch({ type: 'INIT_ERROR' });
        console.log(user.email, email, password);
        if (!emailValidation(email)) {
            return dispatch({ type: 'ERROR', payload: 'invalid email' });
        }

        if (!checkLength(6, 10, password.length) && !password === '') {
            return dispatch({ type: 'ERROR', payload: 'password must be at least 6 characters long' });
        }

        if (password !== confirm) {
            return dispatch({ type: 'ERROR', payload: 'password and confirm password don\'t match' });
        }

        if (email !== user.email) {
            promises.push(updateEmail(email));
        }

        if (password) {
            promises.push(updatePassword(password));
        }

        Promise.all(promises)
            .then(() => history.push('/'))
            .catch((err) => {
                dispatch({ type: 'ERROR', payload: err.message });
            });
    };

    function inputHandler(e) {
        dispatch({ type: actionType(e), payload: e.target.value });
    }

    useEffect(() => {
        dispatch({ type: 'EMAIL', payload: user.email });
        // eslint-disable-next-line
    }, []);

    return (<div className={classes.Container}>
        <header className={classes.Header}>
            <h2 className={classes.Heading}>Update Profile</h2>
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
            <Button>Update</Button>
            <p className={classes.HeaderMessage} style={{ marginTop: '2rem' }}>
                <Link to="/" className={classes.HeaderLink}>Cancel</Link>
            </p>
        </form>
    </div>);
};

export default UpdateProfile;