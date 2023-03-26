import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./reducers";
import { RootState as TypesRootState  } from "./types";

const rootReducer = combineReducers<TypesRootState>({
  auth: authReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, applyMiddleware(thunk));
