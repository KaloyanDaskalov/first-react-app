import React, { Component } from 'react';
import classes from './Signin.module.css';
import Button from '../UI/Button';

class Signin extends Component {

    state = {
        emailValue: '',
        passValue: '',
        emailError: false,
        passError: false,
        errorMessage: 'error'
    }

    submitHandler = (event) => {
        event.preventDefault();
        if (this.state.emailValue < 1) {
            this.setState({ emailError: true, errorMessage: 'Invalid Email' });
        } else {
            this.setState({ emailError: false, errorMessage: 'error' });
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
        if (this.state.errorMessage !== 'error') classMessage.push(classes.Show);

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
                    <input className={classEmail.join(' ')} type="text" placeholder="Email" onChange={this.emailHandler} value={this.state.emailValue} />
                    <input className={classPassword.join(' ')} type="password" placeholder="Password" onChange={this.passwordHandler} value={this.state.passValue} />
                    <Button>Sign In</Button>
                </form>
            </div>
        );
    }
}

export default Signin;