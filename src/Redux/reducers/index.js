import userLoginReducer from './userReducer/userLogin';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    user: userLoginReducer,
});

export default rootReducer;