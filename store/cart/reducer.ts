import produce, { current } from "immer";
import undoable from "redux-undo";
import { Action, ActionTypes } from "../action-types";
import { ICartState } from "./types";

const initialState: ICartState = {
  products: [],
};

export const CartReducer = undoable(
  produce((draft: ICartState, action: Action): ICartState => {
    switch (action.type) {
      case ActionTypes.hydrate: {
        return { ...draft, ...action.payload.cart };
      }

      case ActionTypes.addCartProduct: {
        const index = draft.products.findIndex(
          (p) => p.id === action.payload.id
        );

        if (index === -1) {
          draft.products.push(action.payload);
          return draft;
        }

        draft.products[index].quantity += action.payload.quantity;

        return draft;
      }
      case ActionTypes.deleteCartProduct: {
        const index = draft.products.findIndex((p) => p.id === action.payload);

        if (index !== -1) draft.products.splice(index, 1);

        return draft;
      }
      case ActionTypes.editCartProductQuantity: {
        const index = draft.products.findIndex(
          (p) => p.id === action.payload.id
        );
        if (index !== -1) {
          draft.products[index].quantity = action.payload.quantity;
        }

        return draft;
      }
      case ActionTypes.resetCart: {
        draft.products = [];
        return draft;
      }

      default:
        return draft;
    }
  }, initialState)
);
