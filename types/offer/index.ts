import { IProduct } from "../product";

export interface IOffer {
  id: number;
  activeOffer: null;
  company: Company;
  products: IProduct[];
  startOffer: null;
  endOffer: null;
}

export interface Company {
  name: string;
}
