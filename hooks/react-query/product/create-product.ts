import { useMutation } from "react-query";
import { client } from "../../../api";

import { MutationKeys } from "../api-enum";
import { IOptionsType } from "../types";

export const createProduct = async (body: any) => {
  const { data } = await client.post(`/products/create`, body);

  return data;
};

export const useCreateProduct = (options?: IOptionsType) => {
  return useMutation(async (params: any) => await createProduct(params), {
    ...options,
    mutationKey: MutationKeys.createProduct,
  });
};
