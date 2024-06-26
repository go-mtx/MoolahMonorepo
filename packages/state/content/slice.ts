import { createSlice } from '@reduxjs/toolkit';
import { contentActions } from './actions';
import { StateData } from '../types';
import { ContentData } from './types';

export const initialContentState: StateData<ContentData> = {
  status: 'loading',
};

const contentSlice = createSlice({
  name: 'content',
  reducerPath: 'content',
  initialState: initialContentState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(contentActions.requestContent, (state) => {
        state.status = 'loading';
      })
      .addCase(contentActions.setContent, (state, action) => {
        if (action.payload.currentTheme) {
          state.data = action.payload as unknown as any;
          state.status = 'idle';
        }
      })
      .addCase(contentActions.setError, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default contentSlice.reducer;
