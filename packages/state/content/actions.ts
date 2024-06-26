import { createAction } from '@reduxjs/toolkit';
import { ContentData } from './types';

export const contentActionTypes = {
  REQUEST_CONTENT: 'content/REQUEST_CONTENT',
  SET_CONTENT: 'content/SET_CONTENT',
  SET_ERROR: 'content/SET_ERROR',
};

export const contentActions = {
  requestContent: createAction<string>(contentActionTypes.REQUEST_CONTENT),
  setContent: createAction<ContentData>(contentActionTypes.SET_CONTENT),
  setError: createAction<string>(contentActionTypes.SET_ERROR),
};
