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
export const cartProductsItemsWithSkuAndQuantitySelector = createSelector(
  [state],
  (cart) =>
    cart.products.map((product) => {
      return { skuId: product.sku.id, quantity: product.quantity };
    })
);
export const cartHasProductsSelector = createSelector(
  [state],
  (cart) => !!cart.products.length
);
export const cartSubtotalSelector = createSelector([state], (cart) =>
  cart.products.reduce((acc, curr) => {
    return acc + curr.sku?.sellingPrice * curr.quantity;
  }, 0)
);
export const cartCanUndoSelector = createSelector(
  [pastState],
  (pastCart) => !!pastCart.length
);
