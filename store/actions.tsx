import { ThunkAction } from "redux-thunk";
import { RootState } from "./types";
import { Action } from "redux";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: string[];
}

export type AuthActionTypes = LoginSuccessAction;// | LogoutSuccessAction;

export const loginSuccess = (token:string[] ): AuthActionTypes => ({
  type: LOGIN_SUCCESS,
  payload: token,
});


export const login = (
  username: string,
  password: string
): ThunkAction<void, RootState, null, Action<string>> => {
  
    return (dispatch) => {
    // login API here
    // If successful, dispatch loginSuccess with the token
    const token = "dummyJWT";
    dispatch(loginSuccess([token,username]));
  };
};

