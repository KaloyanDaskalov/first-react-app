import React, { useState, useContext, useEffect } from 'react';
import { auth } from '../config/firebase';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    function signup(email, password) {
        auth.createUserWithEmailAndPassword(email, password);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setUser(user);
        });
        return unsubscribe;
    }, []);

    const context = {
        user,
        signup
    };

    return (
        <AuthContext.Provider value={context} >
            {children}
        </AuthContext.Provider>
    );
}
