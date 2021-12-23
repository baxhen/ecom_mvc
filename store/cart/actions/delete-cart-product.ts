import { cartTypes } from "../action-types";
import { ICartProduct } from "../types";

export interface DeleteCartProductAction {
  type: typeof cartTypes.deleteCartProduct;
  payload: number;
}

export const deleteCartProduct = (
  payload: number
): DeleteCartProductAction => ({
  type: cartTypes.deleteCartProduct,
  payload,
});
