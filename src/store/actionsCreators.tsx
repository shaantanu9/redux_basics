import { LOGIN_FAIL, LOGIN_LOADING, LOGIN_SUCCESS } from "./actionTypes";

const loginSuccess = (token: string): any => {
  return {
    type: LOGIN_SUCCESS,
    payload: token
  };
};

const loginFail = () => {
  return {
    type: LOGIN_FAIL
  };
};

const loginLoading = () => {
  return {
    type: LOGIN_LOADING
  };
};

export { loginFail, loginLoading, loginSuccess };
