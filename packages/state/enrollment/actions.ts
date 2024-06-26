import { createAction } from '@reduxjs/toolkit';
import { EnrollmentData } from './types';

export const enrollmentActionTypes = {
  REQUEST_ENROLLMENT: 'enrollment/REQUEST_ENROLLMENT',
  SET_ENROLLMENT: 'enrollment/SET_ENROLLMENT',
  SET_ERROR: 'enrollment/SET_ERROR',
};

export const enrollmentActions = {
  requestEnrollment: createAction<string>(
    enrollmentActionTypes.REQUEST_ENROLLMENT
  ),
  setEnrollment: createAction<EnrollmentData>(
    enrollmentActionTypes.SET_ENROLLMENT
  ),
  setError: createAction<string>(enrollmentActionTypes.SET_ERROR),
};
