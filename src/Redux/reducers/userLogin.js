import * as type from '../types';

const initialState = {
    user: {}, 
    loading: false,
    error: null
}

const userLoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.LOGIN_USER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case type.USER_SUCCESS:    
            return {
                ...state,
                loading: false,
                error: null,
                user: action.user
            }
        case type.USER_FAILED:
            return {
                ...state,
                loading: false,
                user: {},
                error: action.message,
            }
        case type.REGISTER_USER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null   
            }     
        case type.LOGOUT_USER_REQUEST:
            return {
                user: {},
                laoding: false,
                error: null
            }   
        default:
            return state;
    }    
}

export default userLoginReducer;