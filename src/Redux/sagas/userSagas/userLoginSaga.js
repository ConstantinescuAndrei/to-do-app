import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


async function login(action) {
    const response = await axios.post('http://localhost:5000/auth/login', action);    
    return response.data; 
}

function* fetchUser(action) {
    try {
        const response = yield call(login, action.payload);
        if(response.validUser === false) {
            throw new Error('Invalid user or password!');
        }
        yield put({ type: 'LOGIN_USER_SUCCESS', user: response.user })
    } catch(e) {
        yield put({ type: 'LOGIN_USER_FAILED', message: e.message })
    }
}

function* userLoginSaga() {
    yield takeEvery('LOGIN_USER_REQUEST', fetchUser);
}

export default userLoginSaga;