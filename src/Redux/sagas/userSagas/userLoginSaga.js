import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

const loginLink = 'http://localhost:5000/auth/login';

async function login(action) {
    const response = await axios.post(loginLink, action);  
    return response.data; 
}

function* fetchUser(action) {
    try {
        const response = yield call(login, action.payload);
        if(response.validUser === false) {
            throw new Error('Invalid user or password!');
        }
        yield put({ type: 'USER_SUCCESS', user: response.user })
    } catch(e) {
        yield put({ type: 'USER_FAILED', message: e.message })
    }
}

function* userLoginSaga() {
    yield takeEvery('LOGIN_USER_REQUEST', fetchUser);
}

export default userLoginSaga;