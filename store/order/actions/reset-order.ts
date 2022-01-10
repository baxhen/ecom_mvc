import { ActionTypes } from "../../action-types";

export interface ResetOrderAction {
  type: typeof ActionTypes.resetOrder;
}

export const resetOrder = (): ResetOrderAction => ({
  type: ActionTypes.resetOrder,
});
