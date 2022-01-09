export interface IOrder {
  status: number;
  message: string;
  data: Data;
}

interface Data {
  orderAddress: Address;
  listOrdersDetail: ListOrdersDetail[];
  orders: Order;
}

export interface ListOrdersDetail {
  product: Product;
  ordersDetail: OrdersDetail;
}

export interface OrdersDetail {
  id: number;
  createdAt: string;
  updatedAt: string;
  parentId: null;
  order: Order;
  product: Product;
  isVirtual: null;
  skuId: number;
  name: string;
  description: null;
  freeShipping: null;
  weight: null;
  quantity: number;
  price: number;
  basePrice: null;
  rowTotal: number;
  baseRowTotal: null;
  rowWeight: number;
  productType: null;
}

export interface Order {
  id: number;
  createdAt: string;
  updatedAt: string;
  user: User;
  address: Address;
  statusPaymentActual: string;
  isActive: null;
  isVirtual: null;
  isMultiShipping: null;
  status: string;
  transactionId: string;
  itemsQuantity: number;
  checkoutComment: null;
  customerEmail: string;
  customerCpf: string;
  customerFirstname: string;
  customerLastname: null;
  customerIsGuest: boolean;
  remoteIp: null;
  customerGender: null;
  subtotal: number;
  baseSubtotal: number;
  totalAmount: number;
  totalPriceWeight: number;
  changed: null;
  paymentStatusOK: boolean;
  hibernateLazyInitializer: HibernateLazyInitializer;
  orderStatusCanceled: boolean;
}

export interface Address {
  id: number;
  createdAt: string;
  updatedAt: string;
  user: User;
  phone: string;
  status: number;
  neighborhood: string;
  addressNumber: string;
  state: string;
  city: string;
  country: string;
  hibernateLazyInitializer: HibernateLazyInitializer;
  address_line_1: string;
  address_line_2: string;
  postal_code: null;
}

export interface HibernateLazyInitializer {}

export interface User {
  id: number;
  createdAt: string;
  updatedAt: string;
  company: null;
  roleId: number;
  email: string;
  cpf: string;
  firstName: string;
  lastName: string;
  birthdate: string;
  status: string;
  hibernateLazyInitializer: HibernateLazyInitializer;
}

export interface Product {
  id: number;
  createdAt: string;
  updatedAt: string;
  company: Company;
  name: string;
  salePrice: number;
  listPrice: number;
  defaultImage: string;
  overview: null;
  virtual: boolean;
  status: number;
  description: string;
  weight: number;
  length: number;
  width: number;
  height: number;
  freightValue: null;
  insuranceValue: null;
  hibernateLazyInitializer: HibernateLazyInitializer;
}

interface Company {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
  brandName: null;
  brand: boolean;
  status: number;
  hibernateLazyInitializer: HibernateLazyInitializer;
}
