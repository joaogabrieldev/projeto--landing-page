import type { JSX } from "react";
import type { Question } from "@/assets/faq";

//* Card
export type ArrayStructure = {
  title: string;
  description: string;
  icon: JSX.Element;
};

export interface ICardProps {
  array: ArrayStructure;
}

//* NavButton
export interface INavButtonProps {
  slug: string;
  label: string;
}

//* PlanCard
export type Beneficts = {
  title: string;
};

export interface IPlanCardProps {
  title: string;
  price: number;
  originalPrice?: number | null;
  emphasis: boolean;
  description: string;
  recommendation: string;
  beneficts: Beneficts[];
}

//* PrimaryButton
export interface IPrimaryButtonProps {
  label: string;
  slug: string;
  width: number;
}

//* QuestionBlock
export interface IQuestionBlockProps {
  title: string;
  questions: Question[];
  index: number;
}

//* SecondButton
export interface ISecondButtonProps {
  label: string;
  slug: string;
}

//* TestimonialCard
export interface ITestimonialProps {
  description: string;
  testimonialRating: number;
  clientStatus: string;
  clientName: string;
}
