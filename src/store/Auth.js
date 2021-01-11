import React, { useState, useContext } from 'react';

const AuthContext = React.createContext({
    isToken: '',
    isAuth: () => { },
    login: () => { },
    logout: () => { }
});

export function useAuth() {
    return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
    const [isToken, setIsToken] = useState('');

    const login = (token) => {
        setIsToken(token);
    };

    const logout = () => {
        setIsToken('');
    };

    const isAuth = () => {
        return !!isToken;
    }


    return (
        <AuthContext.Provider value={{ isToken, isAuth, login, logout }} >
            {children}
        </AuthContext.Provider>
    );
}
