import React from 'react';
import { useAuth } from '../store/Auth';
import { Link } from 'react-router-dom';

export default function Home() {
    const { user, signOut } = useAuth();

    const signOutHandler = () => {
        try {
            signOut();
        } catch (err) {
            console.error(err);
        }
    };
    let currentUser = 'Anonymous';
    if (user) {
        currentUser = JSON.stringify(user.email);
    }
    const customStyles = { 'display': 'block', 'fontSize': '2rem', 'color': 'gray' };
    return (
        <div>
            <h1>Hello {currentUser}</h1>
            <button onClick={signOutHandler}>Sign Out</button>
            <Link style={customStyles} to="/signup">Sign Up</Link>
            <Link style={customStyles} to="/signin">Sign In</Link>
            <Link style={customStyles} to="/update-profile">Update Profile</Link>
        </div>
    )
}