import { spawn } from 'redux-saga/effects';
import { watchListSaga } from './listSaga';
import { watchDetailsSaga } from './detailsSaga';

export default function* saga() {
  yield spawn(watchListSaga);
  yield spawn(watchDetailsSaga);
}