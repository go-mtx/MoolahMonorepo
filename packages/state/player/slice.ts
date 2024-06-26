import { createSlice } from '@reduxjs/toolkit';
import { playerActions } from './actions';
import { StateData } from '../types';
import { PlayerData } from './types';

export const initialPlayerState: StateData<PlayerData> = {
  status: 'loading',
};

const playerSlice = createSlice({
  name: 'player',
  reducerPath: 'player',
  initialState: initialPlayerState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(playerActions.requestPlayer, (state) => {
        state.status = 'loading';
      })
      .addCase(playerActions.setPlayer, (state, action) => {
        state.data = action.payload;
        state.status = 'idle';
      })
      .addCase(playerActions.setError, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default playerSlice.reducer;
