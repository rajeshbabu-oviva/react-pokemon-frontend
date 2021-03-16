interface ILoadingInit {
  status: 'init';
}
interface ILoadingInProgress {
  status: 'loading';
}
interface ILoaded<T> {
  status: 'loaded';
  payload: T;
}
interface ILoadingError {
  status: 'error';
  error: Error;
}
export type ILoading<T> = ILoadingInit | ILoadingInProgress | ILoaded<T> | ILoadingError;
