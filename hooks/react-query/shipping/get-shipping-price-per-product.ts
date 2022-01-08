import { useQueries } from "react-query";
import { client } from "../../../api";

import { QueryKeys } from "../api-enum";

import { IShippingAPI } from "./types";

interface ShippingInfo {
  id: number;
  weight: number;
}

interface Params {
  products: ShippingInfo[];
}

export const getShippingPrice = async ({ weight, id }: ShippingInfo) => {
  const { data } = await client.get<IShippingAPI>(`/delivery/getPrice`, {
    params: { weight },
  });

  return { ...data, id };
};

export const useGetShippingPricePerProduct = ({ products }: Params) => {
  return useQueries(
    products.map((product) => ({
      queryKey: [QueryKeys.getShippingPricePerProduct, product],
      queryFn: async () => {
        return await getShippingPrice(product);
      },
    }))
  );
};
