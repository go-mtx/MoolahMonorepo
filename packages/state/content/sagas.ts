import { put } from 'redux-saga/effects';
import { contentActions } from './actions';
import { handleError } from '../utils';
import {ContentfulCollection, Entry, createClient} from 'contentful';
import { getThemeSafe } from './utils';

const client = createClient({
  space: process.env.EXPO_PUBLIC_CONTENTFUL_SPACE_ID || 'DUMMY_SPACE_ID',
  accessToken: process.env.EXPO_PUBLIC_CONTENTFUL_ACCESS_TOKEN || 'DUMMYL_ACCESS_TOKEN',
  environment: process.env.EXPO_PUBLIC_CONTENTFUL_ENV || 'DUMMY_ENV',
})

export function* getContentSaga({ payload: id }: { payload: string }) {
  try {
    
    const response: ContentfulCollection<Entry> = yield client.getEntries({
      content_type: 'theme', 
      'sys.id': id,
    });

    const themeObject = getThemeSafe(response)
    if (themeObject) {
      yield put(contentActions.setContent({ id, currentTheme: themeObject}));
    } else {
      // TODO - consider if we want to default to a theme...
      yield put(contentActions.setError("There was an error accessing theme"))
    }
    
  } catch (e) {
    yield handleError(e, contentActions.setError);
  }
}