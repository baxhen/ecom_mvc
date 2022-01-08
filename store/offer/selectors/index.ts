import { createSelector } from "reselect";
import { RootState } from "../../store";

const state = (state: RootState) => state.offer;

export const offersSelector = createSelector([state], (offer) => offer.offers);
