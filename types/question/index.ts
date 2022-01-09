export interface IQuestionAPI {
  success: boolean;
  questions: Question[];
}

export interface Question {
  id: number;
  question: string;
  answers: Answer[];
}

export interface Answer {
  id: number;
  answer: string;
}
