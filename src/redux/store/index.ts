import { applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { listSlice, TListState } from '../slices/listSlice';
import { detailsSlice, TDetailsState } from '../slices/detailsSlice';
import createSagaMiddleWare from 'redux-saga';
import saga from '../sagas';

const sagaMiddleWare = createSagaMiddleWare();

export const store = configureStore({
  reducer: {
    list: listSlice.reducer,
    details: detailsSlice.reducer,
  }, devTools: true, enhancers: [
    compose(applyMiddleware(sagaMiddleWare)),
  ]
})

export type TRootState = {
  list: TListState,
  details: TDetailsState
}

sagaMiddleWare.run(saga);
export default store;
