import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectPlayerState = (state: RootState) => state.player;

export const selectPlayerData = createSelector(
  selectPlayerState,
  (state) => state.data
);

export const selectPlayerStatus = createSelector(
  selectPlayerState,
  (state) => state.status
);

export const selectPlayerError = createSelector(
  selectPlayerState,
  (state) => state.error
);
