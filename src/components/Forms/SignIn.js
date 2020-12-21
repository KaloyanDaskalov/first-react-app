import React, { Component } from 'react';
import classes from './Forms.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

class SignIn extends Component {

    state = {
        emailValue: '',
        passValue: '',
        emailError: false,
        passError: false,
        errorMessage: 'Password must be 4 to 10 characters'
    }

    submitHandler = (event) => {
        event.preventDefault();
        if (this.state.emailValue < 1) {
            this.setState({ emailError: true, errorMessage: 'Invalid Email' });
        } else {
            this.setState({ emailError: false, errorMessage: 'Password must be 4 to 10 characters' });
        }
    }

    emailHandler = (event) => {
        this.setState({ emailValue: event.target.value });
    }

    passwordHandler = (event) => {
        this.setState({ passValue: event.target.value });
    }

    render() {

        const classEmail = [classes.Input];
        const classPassword = [classes.Input];
        const classMessage = [classes.Message]

        if (this.state.emailError) classEmail.push(classes.Error);
        if (this.state.passError) classPassword.push(classes.Error);
        if (this.state.errorMessage !== 'Password must be 4 to 10 characters') classMessage.push(classes.Show);

        return (
            <div className={classes.Container} >
                <header className={classes.Header}>
                    <h2 className={classes.Heading}>Sign In</h2>
                    <p className={classes.HeaderMessage}>
                        Not a member? <a href="#" className={classes.HeaderLink}>Sign Up Now</a>
                    </p>
                    <p className={classMessage.join(' ')}>{this.state.errorMessage}</p>
                </header>
                <form className={classes.Form} onSubmit={this.submitHandler}>
                    <Input getValue={(e) => this.emailHandler(e)} showError={this.state.emailError} attributes={{ type: 'text', placeholder: 'Email' }} />
                    <Input getValue={(e) => this.passwordHandler(e)} showError={this.state.passError} attributes={{ type: 'password', placeholder: 'Password' }} />
                    <Button>Sign In</Button>
                </form>
            </div>
        );
    }
}

export default SignIn;