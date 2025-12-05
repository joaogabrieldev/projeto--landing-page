import type { JSX } from "react";

export type Beneficts = {
  title: string;
};

export type Question = {
  questionID: number;
  questionTitle: string;
  questionBody: string;
};

export type FAQ = {
  title: string;
  questions: Question[];
};

export type Plans = {
  title: string;
  price: number;
  originalPrice?: number | null;
  emphasis: boolean;
  description: string;
  recommendation: string;
  beneficts: Beneficts[];
};


export type NavLinks = {
  id: string;
  title: string;
  slug: string;
};

export type Resources = {
  title: string;
  description: string;
  icon: JSX.Element;
};

export type Testimonials = {
  rating: number;
  description: string;
  clientStatus: string;
  clientName: string;
};
