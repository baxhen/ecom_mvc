import { IOffer } from "../../../types";
import { ActionTypes } from "../../action-types";

export interface AddOfferAction {
  type: typeof ActionTypes.addOffer;
  payload: IOffer;
}

export const addOffer = (payload: IOffer): AddOfferAction => ({
  type: ActionTypes.addOffer,
  payload,
});
