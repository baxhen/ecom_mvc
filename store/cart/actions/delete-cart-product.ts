import { ActionTypes } from "../../action-types";

export interface DeleteCartProductAction {
  type: typeof ActionTypes.deleteCartProduct;
  payload: number;
}

export const deleteCartProduct = (
  payload: number
): DeleteCartProductAction => ({
  type: ActionTypes.deleteCartProduct,
  payload,
});
