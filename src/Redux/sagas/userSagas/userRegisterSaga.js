import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

async function register(action) {
    const response = await axios.post('http://localhost:5000/auth/register', action);
    console.log(response);
    return response.data;
}

function* fetchUser(action) {
    try {
        const response = yield call(register, action.payload);
        if(response.registered === false) {
            throw new Error(response.reason);
        }
        yield put({ type: 'LOGIN_USER_SUCCESS', user: response.user });
    } catch(e) {
        yield put({ type: 'LOGIN_USER_FAILED', message: e.message });
    }
}

function* userRegisterSaga() {
    yield takeEvery('REGISTER_USER_REQUEST', fetchUser);
}

export default userRegisterSaga;