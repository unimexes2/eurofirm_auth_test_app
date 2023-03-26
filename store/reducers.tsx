import { AuthState, AuthActionTypes } from "./types";
import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./actions";

const initialState: AuthState = {
  token: null,
};

export const authReducer = (
  state = initialState,
  action: AuthActionTypes
): AuthState => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
      };
     default:
    return state;
  }
};
