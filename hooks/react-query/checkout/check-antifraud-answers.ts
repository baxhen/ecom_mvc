import { useMutation } from "react-query";
import { client } from "../../../api";

import { MutationKeys, QueryKeys } from "../api-enum";
import { IOptionsType } from "../types";
import { IAnswers } from "./types";

export interface AntiFraudParams {
  answers: IAnswers;
  orderId: number;
}

export const getAntiFraudAnswers = async (body: IAnswers, orderId: number) => {
  const { data } = await client.post(
    `https://payment.carrin.io/payment/api/v1/checkout/${orderId}/answer`,
    body
  );

  return data;
};

export const useCheckAntiFraudAnswers = (options?: IOptionsType) => {
  return useMutation(
    async (params: AntiFraudParams) =>
      await getAntiFraudAnswers(params.answers, params.orderId),
    { ...options, mutationKey: MutationKeys.checkAntiFraudAnswers }
  );
};
