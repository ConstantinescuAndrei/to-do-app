import userLoginReducer from './userLogin';
import todosReducer from './todosReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    user: userLoginReducer,
    todos: todosReducer
});

export default rootReducer;