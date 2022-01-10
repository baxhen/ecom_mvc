import { ActionTypes } from "../../action-types";

export interface ResetCartAction {
  type: typeof ActionTypes.resetCart;
}

export const resetCart = (): ResetCartAction => ({
  type: ActionTypes.resetCart,
});
