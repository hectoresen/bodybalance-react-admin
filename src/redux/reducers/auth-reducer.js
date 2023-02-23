import * as actions from '../actions/auth-actions';

const INITIAL_STATE = {
    user: null,
    error: false,
    message: ''
};

export const authReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case (actions.AUTH_LOGIN_OK) : {
            return {...state, user: action.payload};
        }
        case (actions.AUTH_LOGIN_ERROR) : {
            return {...state, user: null, error: true, message: action.payload}
        }
        default:
            return state;
    }
};
