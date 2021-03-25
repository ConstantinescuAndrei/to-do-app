import * as type from '../types';

const initialState = {
    todos: [],
    loading: false,
    error: null
}

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.TODOS_REQUEST:
            return {
                ...state,
                loading: true,
                todos: [],
                error: null
            }
        case type.SET_TODO_COMPLETE:
            return {
                ...state,
                loading: true,
                error: null
            }
        case type.TODOS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                todos: [...action.todos]
            }
        case type.TODOS_FAILED:
            return {
                ...state,
                loading: false,
                todos: [],
                error: action.message
            }
        case type.TODOS_DELETE:
            return {
                ...state,
                loading: false,
                error: null,
                todos: []
            }
        default:
            return state;
    }
}

export default todosReducer;