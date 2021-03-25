import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

const createNewTodoLink = 'http://localhost:5000/todo/createTodo';

async function createNewTodo(action) {
    const response = await axios.post(createNewTodoLink, action);
    console.log(response);
    return response;
}

function* newTodo(action) {
    try {
        const response = yield call(createNewTodo, action.payload);
        if(response.error) {
            throw new Error(response.error);
        }
        yield put({ type: 'TODOS_SUCCESS', todos: response.data.todos });
    } catch(e) {
        yield put({ type: 'TODOS_FAILED', message: e.message })
    }
}

function* createNewTodoSaga() {
    yield takeEvery('CREATE_TODO', newTodo);
}

export default createNewTodoSaga;