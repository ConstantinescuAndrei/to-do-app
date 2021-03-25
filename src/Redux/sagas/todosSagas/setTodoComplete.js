import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

const setTodoCompleteLink = 'http://localhost:5000/todo/complete';


async function setTodoComplete(action) {
    const response = await axios.get(setTodoCompleteLink, { params: { id: action.id, username: action.username }});
    console.log(response);
    return response;
}

function* setTodo(action) {
    try {
        const response = yield call(setTodoComplete, action.payload);
        if(response.error) {
            throw new Error(response.error);
        }
        yield put({ type: 'TODOS_SUCCESS', todos: response.data.todos });
    } catch(e) {
        yield put({ type: 'TODOS_FAILED', message: e.message })
    }
}

function* setTodoCompleteSaga() {
    yield takeEvery('SET_TODO_COMPLETE', setTodo);
}

export default setTodoCompleteSaga;