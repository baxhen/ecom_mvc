import produce from "immer";
import { Action, ActionTypes } from "../action-types";
import { IUiState } from "./types";

const initialState: IUiState = {
  showHeader: true,
};

export const UiReducer = produce(
  (draft: IUiState, action: Action): IUiState => {
    switch (action.type) {
      case ActionTypes.hydrate: {
        return { ...draft, ...action.payload.offer };
      }

      case ActionTypes.updateHeaderVisibility: {
        draft.showHeader = action.payload;
        return draft;
      }

      default:
        return draft;
    }
  },
  initialState
);
