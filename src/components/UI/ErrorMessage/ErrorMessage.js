import React from 'react';
import classes from '../../Forms/Forms.module.css';

export default function ErrorMessage({ showError, errorMessage }) {
    const classList = [classes.Message, showError ? classes.Show : ''];
    return (
        <p className={classList.join(' ')}>{errorMessage || 'Error Message'}</p>
    );
}
