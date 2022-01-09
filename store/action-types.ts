import { HYDRATE } from "next-redux-wrapper";
import {
  AddCartProductAction,
  DeleteCartProductAction,
  EditCartProductQuantityAction,
} from "./cart";
import { AnyAction } from "redux";

interface HydrateAction {
  type: typeof HYDRATE;
  payload: any;
}

export enum ActionTypes {
  hydrate = "__NEXT_REDUX_WRAPPER_HYDRATE__",
  addCartProduct = "addCartProduct",
  deleteCartProduct = "deleteCartProduct",
  editCartProductQuantity = "editCartProductQuantity",
  addOffer = "addOffer",
  addOrder = "addOrder",
}

export type Action =
  | DeleteCartProductAction
  | AddCartProductAction
  | EditCartProductQuantityAction
  | AnyAction
  | HydrateAction;
