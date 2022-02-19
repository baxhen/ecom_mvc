import { combineReducers } from "redux";
import { CartReducer as cart } from "./cart";
import { OfferReducer as offer } from "./offer";
import { OrderReducer as order } from "./order";
import { UiReducer as ui } from "./ui";

export const reducers = combineReducers({
  cart,
  offer,
  order,
  ui,
});
