export interface IProduct {
  id: number;
  name: string;
  description: string;
  salePrice: number;
  listPrice: number;
  weight: number;
  length: number;
  width: number;
  height: number;
  defaultImage: string;
  images: null;
  quantity: number;
  attributes: Attribute[];
  skus: Skus[];
}
export interface ICartProduct extends IProduct {
  sku: Skus;
  quantity: number;
}

export interface Attribute {
  id: number;
  name: string;
  details: null;
}

export interface Skus {
  id: number;
  attributeDetails: AttributeDetail[];
  skuCode: string;
  quantity: number;
  listedPrice: number;
  sellingPrice: number;
}

export interface AttributeDetail {
  id: number;
  attribute: Attribute;
  images: Image[];
  valueString: string;
  valueNumberic: null;
}

export interface Image {
  imageUrl: string;
}

export interface IPaginatedProduct {
  status: number;
  message: string;
  data: Data;
}

export interface Data {
  data: Datum[];
  totalResult: number;
  totalPage: number;
  currentPage: number;
}

export interface Datum {
  id: number;
  name: string;
  description: string;
  salePrice: number;
  listPrice: number;
  weight: number;
  length: number;
  width: number;
  height: number;
  defaultImage: string;
  images: null;
  skus: Skus[];
  attributes: Attribute[];
}
