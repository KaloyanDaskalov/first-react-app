import { useReducer } from 'react';

const initialState = {
    email: '',
    password: '',
    confirm: ''
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'Email':
            return { ...state, email: action.email };
        case 'Password':
            return { ...state, password: action.password };
        case 'Confirm':
            return { ...state, confirm: action.confirm };
        default:
            throw new Error('No reducer action');
    }
};

function useFormState() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return [state.email, state.password, dispatch, state.confirm];
}

export default useFormState;