import { LOGIN_FAIL, LOGIN_LOADING, LOGIN_SUCCESS } from "./actionTypes";

export type initialStateT = {
  token: null | string;
  isAuthenticate: boolean;
  loading: boolean;
};

const initialState: initialStateT = {
  token: null,
  isAuthenticate: false,
  loading: false
};

const reducers = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_FAIL:
      return { ...state, isAuthenticate: false, token: null, loading: false };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        loading: false,
        isAuthenticate: true
      };
    case LOGIN_LOADING:
      return { ...state, loading: true, token: null };
    default:
      return state;
  }
};

export default reducers;
