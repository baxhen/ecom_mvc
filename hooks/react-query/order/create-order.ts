import { useMutation, useQueries } from "react-query";
import { client } from "../../../api";

import { MutationKeys } from "../api-enum";

import { IOrderAPI } from "./types";

export const createOrder = async (body: IOrderAPI) => {
  const { data } = await client.post("/orders/create", body);
  return data;
};

export const useCreateOrder = () => {
  return useMutation(createOrder, {
    mutationKey: MutationKeys.createOrder,
  });
};
