import { useReducer } from 'react';

const initialState = {
    email: '',
    password: '',
    confirm: '',
    error: false,
    errorMessage: ''
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'EMAIL':
            return { ...state, email: action.payload };
        case 'PASSWORD':
            return { ...state, password: action.payload };
        case 'CONFIRM_PASSWORD':
            return { ...state, confirm: action.payload };
        case 'ERROR':
            return { ...state, error: true, errorMessage: action.payload };
        case 'INIT_ERROR':
            return { ...state, error: false, errorMessage: '' };
        default:
            throw new Error('Unhandled action' + action.type);
    }
};

function useFormState() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return [state.email, state.password, dispatch, state.confirm, state.error, state.errorMessage];
}

export default useFormState;