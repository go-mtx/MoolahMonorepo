import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectEnrollmentState = (state: RootState) => state.enrollment;

export const selectEnrollmentData = createSelector(
  selectEnrollmentState,
  (state) => state.data
);

export const selectEnrollmentStatus = createSelector(
  selectEnrollmentState,
  (state) => state.status
);

export const selectEnrollmentError = createSelector(
  selectEnrollmentState,
  (state) => state.error
);
