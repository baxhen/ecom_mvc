import { createSelector } from "reselect";
import { RootState } from "../../store";

const state = (state: RootState) => state.cart.present;
const pastState = (state: RootState) => state.cart.past;

export const cartProductCountSelector = createSelector([state], (cart) =>
  cart.products.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0)
);
export const cartProductsSelector = createSelector(
  [state],
  (cart) => cart.products
);
export const cartSubtotalSelector = createSelector([state], (cart) =>
  cart.products.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0)
);
export const cartCanUndoSelector = createSelector(
  [pastState],
  (pastCart) => !!pastCart.length
);
