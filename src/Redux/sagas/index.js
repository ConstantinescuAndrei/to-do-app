import { all } from 'redux-saga/effects';
import userLoginSaga from './userSagas/userLoginSaga';
import userRegisterSaga from './userSagas/userRegisterSaga';

export default function* rootSaga() {
    yield all([
        userLoginSaga(),
        userRegisterSaga()
    ])
}