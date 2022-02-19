import { createSelector } from "reselect";
import { RootState } from "../../store";

const state = (state: RootState) => state.ui;

export const showHeaderSelector = createSelector(
  [state],
  (ui) => ui.showHeader
);
