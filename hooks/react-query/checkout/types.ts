export interface IAnswers {
  questions: Question[];
}

export interface Question {
  answer: number;
  id: number;
}

export interface IPaymentMethod {
  creditCard: CreditCard;
  installment: number;
  method: string;
  orderId: number;
}

export interface CreditCard {
  brand: string;
  cvv: number;
  exp_month: number;
  exp_year: number;
  holder: string;
  number: string;
}
