export interface AuthState {
    token: string[]| null;
  }
  
  export interface RootState {
    auth: AuthState;
  }
  
  export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
  export const SET_USERNAME = "SET_USERNAME";

  interface SetUsernameAction {
    type: typeof SET_USERNAME;
    payload: string;
  }


  interface LoginSuccessAction {
    type: typeof LOGIN_SUCCESS;
    payload: string[];
    
  }

  export type AuthActionTypes = LoginSuccessAction;
  