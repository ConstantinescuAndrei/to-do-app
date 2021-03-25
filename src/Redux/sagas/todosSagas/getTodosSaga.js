import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

const getTodosLink = 'http://localhost:5000/todo';

async function getTodos(action) {
    const username = action.username;
    const response = await axios.get(getTodosLink, 
        {
            headers: {
            "Content-Type": "application/json",
            "username": username
        }});
    return response;
} 

function* fetchTodos(action) {
    try {
        const response = yield call(getTodos, action.payload);
        if(response.error) {
            throw new Error(response.error);
        }
        yield put({ type: 'TODOS_SUCCESS', todos: response.data.todos });
    } catch(e) {
        yield put({ type: 'TODOS_FAILED', message: e.message })
    }
}

function* getTodosSaga() {
    yield takeEvery('TODOS_REQUEST', fetchTodos);
}

export default getTodosSaga;