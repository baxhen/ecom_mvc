import { cartTypes } from "../action-types";
import { ICartProduct } from "../types";

export interface AddCartProductAction {
  type: typeof cartTypes.addCartProduct;
  payload: ICartProduct;
}

export const addCartProduct = (
  payload: ICartProduct
): AddCartProductAction => ({
  type: cartTypes.addCartProduct,
  payload,
});
