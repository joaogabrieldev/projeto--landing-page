import type { JSX } from "react";

export type Beneficts = {
  title: string;
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
