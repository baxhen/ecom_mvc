import { createSelector } from "reselect";
import { RootState } from "../../store";

const state = (state: RootState) => state.order;

export const orderSelector = createSelector([state], (order) => order.order);
export const orderIdSelector = createSelector(
  [state],
  (order) => order.order.id
);
