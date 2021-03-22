import * as type from '../types';

export const signIn = (user) => {
    return {
        type: type.LOGIN_USER_REQUEST,
        payload: user
    }
}

export const signUp = (user) => {
    return {
        type: type.REGISTER_USER_REQUEST,
        payload: user
    }
}