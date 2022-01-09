import { UseQueryOptions } from "react-query";

export type IOptionsType = Omit<
  UseQueryOptions<any, any, any, any>,
  "queryKey" | "queryFn"
>;
