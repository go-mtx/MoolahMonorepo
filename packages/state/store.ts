import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';
/** Player */
import playerReducer from './player/slice';
import { playerActions } from './player/actions';
import { getPlayerSaga } from './player/sagas';
/** Enrollment */
import enrollmentReducer from './enrollment/slice';
import { enrollmentActions } from './enrollment/actions';
import { getEnrollmentSaga } from './enrollment/sagas';
/** Content */
import contentReducer from './content/slice';
import { contentActions } from './content/actions';
import { getContentSaga } from './content/sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    player: playerReducer,
    enrollment: enrollmentReducer,
    content: contentReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
});

function* rootSaga() {
  yield takeEvery(playerActions.requestPlayer, getPlayerSaga);
  yield takeEvery(enrollmentActions.requestEnrollment, getEnrollmentSaga);
  yield takeEvery(contentActions.requestContent, getContentSaga);
}

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
