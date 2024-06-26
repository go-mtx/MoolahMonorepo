import { put } from 'redux-saga/effects';

export function* handleError(
  e: unknown,
  fn: (arg: string) => { payload: string; type: string }
) {
  if (typeof e === 'object' && e !== null) {
    if ('message' in e && typeof e.message === 'string') {
      /**
       * More work here for error structure
       */
      yield put(fn(e.message));
    } else {
      yield put(fn('Sorry, an error has occurred'));
    }
  }
}
