import { ObjectId } from "mongodb";

// FAQ Type
export interface FAQ  {
  question: string;
  answer: string;
};


export interface FAQDocument extends FAQ {
    _id: ObjectId,
    faqs: FAQ[]
}