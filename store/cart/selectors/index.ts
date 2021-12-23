import { createSelector } from "reselect";
import { RootState } from "../../store";

const state = (state: RootState) => state.cart;

export const cartProductCountSelector = createSelector(
  [state],
  (cart) => cart.products.length || 0
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
