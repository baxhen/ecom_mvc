import { useQuery } from "react-query";
import { client } from "../../../api";

import { MutationKeys, QueryKeys } from "../api-enum";
import { IOptionsType } from "../types";
import { IProductsPaginated } from "./types";

export interface ProductsPaginatedParams {
  instance?: string;
}

export const getProductsPaginated = async (params: ProductsPaginatedParams) => {
  const { data } = await client.get<IProductsPaginated>(
    `/products/${params.instance}`,
    {
      params,
    }
  );

  return data.data;
};

export const useGetProductsPaginated = (
  params: ProductsPaginatedParams,
  options?: IOptionsType
) => {
  return useQuery(
    [QueryKeys.getProductsPaginated, params],
    async (): Promise<IProductsPaginated["data"]> => {
      return await getProductsPaginated(params);
    },
    {
      ...options,
    }
  );
};
