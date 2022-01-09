export interface IOrderAPI {
  productItems: ProductItem[];
  user: User;
  id: number;
}

export interface ProductItem {
  quantity: number;
  skuId: number;
}

export interface User {
  address: Address;
  billingAddress: Address;
  birthdate: string;
  cpf: string;
  email: string;
  firstName: string;
  id?: string;
  lastName: string;
  phone: string;
  sameBillingAddress: boolean;
}

export interface Address {
  addressNeighborhood: string;
  address_line_1: string;
  address_line_2: string;
  city: string;
  country: string;
  number: string;
  postal_code: string;
  state: string;
}
