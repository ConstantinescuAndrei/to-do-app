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

export const logout = () => {
    return {
        type: type.LOGOUT_USER_REQUEST
    }
}

export const getTodos = (user) => {
    return {
        type: type.TODOS_REQUEST,
        payload: user
    }
}

export const setTodoComplete = (todo_data) => {
    return {
        type: type.SET_TODO_COMPLETE,
        payload: todo_data
    }
}

export const deleteTodos = () => {
    return {
        type: type.TODOS_DELETE
    }
}