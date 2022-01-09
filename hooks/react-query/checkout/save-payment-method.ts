import { useMutation } from "react-query";
import { client } from "../../../api";

import { MutationKeys } from "../api-enum";
import { IOptionsType } from "../types";
import { IPaymentMethod } from "./types";

export const savePaymentMethod = async (body: IPaymentMethod) => {
  const { data } = await client.post(
    `https://payment.carrin.io/payment/api/v1/checkout/${body.orderId}/payment`,
    body
  );

  return data;
};

export const useSavePaymentMethod = (options?: IOptionsType) => {
  return useMutation(
    async (params: IPaymentMethod) => await savePaymentMethod(params),
    { ...options, mutationKey: MutationKeys.savePaymentMethod }
  );
};
