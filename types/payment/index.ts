export interface IInstallmentsAPI {
  data: Data;
}

interface Data {
  ted: Ted;
  order: string;
  dolar: string;
  creditcard: Creditcard;
}

export interface Creditcard {
  installments: Installment[];
}

export interface Installment {
  installment: string;
  monthly: string;
  total: string;
}

export interface Ted {
  amount: string;
}
