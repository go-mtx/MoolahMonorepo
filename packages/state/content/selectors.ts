import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectContentState = (state: RootState) => state.content;

export const selectContentData = createSelector(
  selectContentState,
  (state) => state.data
);

export const selectContentStatus = createSelector(
  selectContentState,
  (state) => state.status
);

export const selectContentError = createSelector(
  selectContentState,
  (state) => state.error
);
