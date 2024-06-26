import { put } from 'redux-saga/effects';
import { enrollmentActions } from './actions';
import { handleError } from '../utils';

export function* getEnrollmentSaga({ payload: id }: { payload: string }) {
  try {
    yield put(enrollmentActions.setEnrollment({ id }));
  } catch (e) {
    yield handleError(e, enrollmentActions.setError);
  }
}
