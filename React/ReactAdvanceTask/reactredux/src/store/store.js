
import { createStore } from "redux";
import { combineRed } from "../reducers/combineReducers";

export const store = createStore(combineRed,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())