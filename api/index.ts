import axios from "axios";

export const client = axios.create({
  baseURL: "https://apps.carrin.io/shop/api/v1",
});
