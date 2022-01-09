import { IOrderAPI } from "../../../hooks";
import { IOffer } from "../../../types";
import { ActionTypes } from "../../action-types";

export interface AddOrderAction {
  type: typeof ActionTypes.addOrder;
  payload: IOrderAPI;
}

export const addOrder = (payload: IOrderAPI): AddOrderAction => ({
  type: ActionTypes.addOrder,
  payload,
});
