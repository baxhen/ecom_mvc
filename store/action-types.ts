import { HYDRATE } from "next-redux-wrapper";
import { cartTypes } from "./cart/action-types";
import { AddCartProductAction } from "./cart";
import { AnyAction } from "redux";

interface HydrateAction {
  type: typeof HYDRATE;
  payload: any;
}

export const ActionTypes = { hydrate: HYDRATE, ...cartTypes };

export type Action = AddCartProductAction | HydrateAction | AnyAction;
