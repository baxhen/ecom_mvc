import { ActionTypes } from "../../action-types";
import { ICartProduct } from "../types";

export interface AddCartProductAction {
  type: typeof ActionTypes.addCartProduct;
  payload: ICartProduct;
}

export const addCartProduct = (
  payload: ICartProduct
): AddCartProductAction => ({
  type: ActionTypes.addCartProduct,
  payload,
});
