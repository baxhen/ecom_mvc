import { combineReducers } from "redux";
import { CartReducer as cart } from "./cart";
import { OfferReducer as offer } from "./offer";
import { OrderReducer as order } from "./order";

export const reducers = combineReducers({
  cart,
  offer,
  order,
});
