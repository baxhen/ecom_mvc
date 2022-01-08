import { combineReducers } from "redux";
import { CartReducer as cart } from "./cart";
import { OfferReducer as offer } from "./offer";

export const reducers = combineReducers({
  cart,
  offer,
});
