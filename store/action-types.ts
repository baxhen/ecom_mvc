import { HYDRATE } from "next-redux-wrapper";
import {
  AddCartProductAction,
  DeleteCartProductAction,
  EditCartProductQuantityAction,
} from "./cart";
import { AnyAction } from "redux";
import { ResetCartAction } from "./cart/actions/reset-cart";
import { ResetOrderAction } from "./order/actions/reset-order";
import { UpdateHeaderVisibilityAction } from "./ui";

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
  resetOrder = "resetOrder",
  updateHeaderVisibility = "updateHeaderVisibility",
  resetCart = "resetCart",
}

export type Action =
  // | ResetOrderAction
  // | ResetCartAction
  | UpdateHeaderVisibilityAction
  | DeleteCartProductAction
  | AddCartProductAction
  | EditCartProductQuantityAction
  | AnyAction
  | HydrateAction;
