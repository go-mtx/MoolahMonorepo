import { createAction } from '@reduxjs/toolkit';
import { PlayerData } from './types';

export const playerActionTypes = {
  REQUEST_PLAYER: 'player/REQUEST_PLAYER',
  SET_PLAYER: 'player/SET_PLAYER',
  SET_ERROR: 'player/SET_ERROR',
};

export const playerActions = {
  requestPlayer: createAction<string>(playerActionTypes.REQUEST_PLAYER),
  setPlayer: createAction<PlayerData>(playerActionTypes.SET_PLAYER),
  setError: createAction<string>(playerActionTypes.SET_ERROR),
};
