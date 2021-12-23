export interface ICartState {
  products: ICartProduct[];
}

export interface ICartProduct {
  name: string;
  description: string;
  sku: string;
  store: string;
  price: number;
  quantity: number;
  id: number;
  img: string;

  size?: number;
  color?: number;
}
