import { createSlice } from '@reduxjs/toolkit';
import { enrollmentActions } from './actions';
import { StateData } from '../types';
import { EnrollmentData } from './types';

export const initialPlayerState: StateData<EnrollmentData> = {
  status: 'loading',
};

const enrollmentSlice = createSlice({
  name: 'enrollment',
  reducerPath: 'enrollment',
  initialState: initialPlayerState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(enrollmentActions.requestEnrollment, (state) => {
        state.status = 'loading';
      })
      .addCase(enrollmentActions.setEnrollment, (state, action) => {
        state.data = action.payload;
        state.status = 'idle';
      })
      .addCase(enrollmentActions.setError, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default enrollmentSlice.reducer;
