import { IOffer } from "../../../types";
import { ActionTypes } from "../../action-types";

export interface UpdateHeaderVisibilityAction {
  type: typeof ActionTypes.updateHeaderVisibility;
  payload: boolean;
}

export const updateHeaderVisibility = (
  payload: boolean
): UpdateHeaderVisibilityAction => ({
  type: ActionTypes.updateHeaderVisibility,
  payload,
});
