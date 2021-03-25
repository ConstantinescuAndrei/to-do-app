import { all } from 'redux-saga/effects';
import userLoginSaga from './userSagas/userLoginSaga';
import userRegisterSaga from './userSagas/userRegisterSaga';
import getTodosSaga from './todosSagas/getTodosSaga';
import setTodoComplete from './todosSagas/setTodoComplete';

export default function* rootSaga() {
    yield all([
        userLoginSaga(),
        userRegisterSaga(),
        getTodosSaga(),
        setTodoComplete()
    ])
}