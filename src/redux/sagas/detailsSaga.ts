import { call, takeLatest, put } from 'redux-saga/effects';
import { fetchDetails } from '../../api';
import { TItem } from '../../components/Item';
import { fetchRequest, fetchSuccess, fetchFailure } from '../slices/detailsSlice';

type TAction = {
  type: string;
  payload: string;
}

function* handleDetailsSaga(action: TAction) {
  try {
    const data: TItem = yield call(fetchDetails, action.payload);
    yield put(fetchSuccess(data));
  } catch (error) {
    if (!(error instanceof Error)) return;
    yield put(fetchFailure(error));
  }
}

export function* watchDetailsSaga() {
  yield takeLatest(fetchRequest.toString(), handleDetailsSaga);
}
