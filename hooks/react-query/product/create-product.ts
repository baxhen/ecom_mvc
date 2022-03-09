import { useMutation } from "react-query";
import { client } from "../../../api";

import { MutationKeys } from "../api-enum";
import { IOptionsType } from "../types";

export const createProduct = async (body: any, instance: string) => {
  const { data } = await client.post(`/products/save/${instance}`, body);

  return data;
};

export const useCreateProduct = (options?: IOptionsType) => {
  return useMutation(
    async ({ params, instance }: { params: any; instance: string }) =>
      await createProduct(params, instance),
    {
      ...options,
      mutationKey: MutationKeys.createProduct,
    }
  );
};
