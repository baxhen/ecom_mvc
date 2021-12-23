import { combineReducers } from "redux";
import { CartReducer as cart } from "./cart";

export const reducers = combineReducers({
  cart,
});
