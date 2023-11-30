import { call, takeLatest, put } from 'redux-saga/effects';
import { fetchList } from '../../api';
import { TItem } from '../../components/Item';
import { fetchRequest, fetchSuccess, fetchFailure } from '../slices/listSlice';

function* handleListSaga() {
  try {
    const data: Array<TItem> = yield call(fetchList);
    yield put(fetchSuccess(data));
  } catch (error) {
    if (!(error instanceof Error)) return;
    yield put(fetchFailure(error));
  }
}

export function* watchListSaga() {
  yield takeLatest(fetchRequest.toString(), handleListSaga);
}
