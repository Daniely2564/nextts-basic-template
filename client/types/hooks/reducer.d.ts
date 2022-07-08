export interface Action {
  type: string;
  payload?: any;
}

export interface FetchAction extends Action {
  type: "FETCH_START" | "FETCH_SUCCESS" | "FETCH_ERROR";
}

export interface FetchState<T = any> {
  loading: boolean;
  data: T | null;
  error: string | null;
}
