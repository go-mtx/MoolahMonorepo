export interface StateData<T> {
  data?: T;
  error?: string;
  status: 'idle' | 'loading' | 'failed';
}
