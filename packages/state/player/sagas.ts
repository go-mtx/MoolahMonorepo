import { put } from 'redux-saga/effects';
import { playerActions } from './actions';
import { handleError } from '../utils';

export function* getPlayerSaga({ payload: id }: { payload: string }) {
  try {
    yield put(playerActions.setPlayer({ id }));
  } catch (e) {
    yield handleError(e, playerActions.setError);
  }
}
