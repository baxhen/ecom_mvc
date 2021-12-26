import { ActionTypes } from "../..";

export interface EditCartProductQuantityAction {
  type: typeof ActionTypes.editCartProductQuantity;
  payload: { id: number; quantity: number };
}

export const editCartProductQuantity = (payload: {
  id: number;
  quantity: number;
}): EditCartProductQuantityAction => ({
  type: ActionTypes.editCartProductQuantity,
  payload,
});
