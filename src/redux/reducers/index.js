import { combineReducers } from 'redux';
import { authReducer } from './auth-reducer';
import menu from './menu';

const reducers = combineReducers({
    auth: authReducer,
    menu
});

export default reducers;