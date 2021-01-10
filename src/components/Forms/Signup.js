import React from 'react';
import classes from './Forms.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import useFormState from '../../store/formState';

const Signup = () => {
    const [email, password, dispatch, confirm] = useFormState();
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
            <Input getValue={(e) => dispatch({ type: 'Email', email: e.target.value })} showError={false} attributes={{ type: 'text', placeholder: 'Email' }} />
            <Input getValue={(e) => dispatch({ type: 'Password', password: e.target.value })} showError attributes={{ type: 'password', placeholder: 'Password' }} />
            <Input getValue={(e) => dispatch({ type: 'Confirm', confirm: e.target.value })} showError attributes={{ type: 'password', placeholder: 'Confirm Password' }} />
            <p className={classes.Instructions}>Password must be at least 6 characters long</p>
            <Button>Sign Up</Button>
        </form>
    </div>);
};

export default Signup;