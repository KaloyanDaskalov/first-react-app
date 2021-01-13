import { useReducer } from 'react';

const initialState = {
    email: '',
    password: '',
    confirm: ''
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'EMAIL':
            return { ...state, email: action.payload };
        case 'PASSWORD':
            return { ...state, password: action.payload };
        case 'CONFIRM_PASSWORD':
            return { ...state, confirm: action.payload };
        default:
            throw new Error('No reducer action');
    }
};

function useFormState() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return [state.email, state.password, dispatch, state.confirm];
}

export default useFormState;