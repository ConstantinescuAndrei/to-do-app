import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

const setTodoCompleteLink = 'http://localhost:5000/todo/delete';


async function deleteById(action) {
    const response = await axios.get(setTodoCompleteLink, { params: { id: action.id, username: action.username }});
    console.log(response);
    return response;
}

function* deleteTodo(action) {
    try {
        const response = yield call(deleteById, action.payload);
        if(response.error) {
            throw new Error(response.error);
        }
        yield put({ type: 'TODOS_SUCCESS', todos: response.data.todos });
    } catch(e) {
        yield put({ type: 'TODOS_FAILED', message: e.message })
    }
}

function* DeleteTodoSaga() {
    yield takeEvery('DELETE_TODO', deleteTodo);
}

export default DeleteTodoSaga;