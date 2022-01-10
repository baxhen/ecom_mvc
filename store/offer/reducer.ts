import produce from "immer";
import { Action, ActionTypes } from "../action-types";
import { IOfferState } from "./types";

const initialState: IOfferState = {
  offers: [],
};

export const OfferReducer = produce(
  (draft: IOfferState, action: Action): IOfferState => {
    switch (action.type) {
      case ActionTypes.hydrate: {
        return { ...draft, ...action.payload.offer };
      }

      case ActionTypes.addOffer: {
        const index = draft.offers.findIndex((o) => o.id === action.payload.id);

        if (index !== -1) {
          draft.offers[index] = action.payload;
          return draft;
        }

        draft.offers.push(action.payload);
        return draft;
      }

      default:
        return draft;
    }
  },
  initialState
);
