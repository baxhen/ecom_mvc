import produce from "immer";
import { Action, ActionTypes } from "../action-types";
import { IOrderState } from "./types";

const initialState: IOrderState = {
  order: { productItems: [], user: {} as any, id: 0 },
};

export const OrderReducer = produce(
  (draft: IOrderState, action: Action): IOrderState => {
    switch (action.type) {
      case ActionTypes.hydrate: {
        return { ...draft, ...action.payload.order };
      }

      case ActionTypes.addOrder: {
        draft.order = action.payload;
        return draft;
      }
      case ActionTypes.resetOrder: {
        draft.order = initialState.order;
        return draft;
      }

      default:
        return draft;
    }
  },
  initialState
);
