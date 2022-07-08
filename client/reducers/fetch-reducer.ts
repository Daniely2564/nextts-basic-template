import { FetchState, FetchAction } from "@custom-types/hooks/reducer";

export type FetchReducer<T = any> = (
  state: FetchState<T>,
  action: FetchAction
) => FetchState;

export const fetchReducer: FetchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return {
        error: null,
        data: null,
        loading: true,
      };
    case "FETCH_SUCCESS":
      return {
        data: action.payload,
        loading: false,
        error: null,
      };

    case "FETCH_ERROR": {
      return {
        data: null,
        error: action.payload,
        loading: false,
      };
    }
  }
};
