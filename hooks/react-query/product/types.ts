export interface IProductsPaginated {
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
  listPrice: null;
  weight: number;
  length: number;
  width: number;
  height: number;
  defaultImage: string;
  images: null;
  skus: Skus[];
  attributes: Attribute[];
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
  images: any[];
  valueString: string;
  valueNumberic: null;
}
