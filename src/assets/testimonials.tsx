import type { JSX } from "react";
import { StarHalf } from "lucide-react";
import StarFilled from "../pieces/StarFilled/StarFilled";

export type Testimonials = {
  rating: number;
  description: string;
  clientStatus: string;
  clientName?: string;
};

export function renderStars(rating: number) {
  const integerPart = Math.floor(rating);
  const decimal = rating % 1;

  let finalRating = integerPart;

  if (decimal >= 0.8) {
    finalRating += 1;
  } else if (decimal >= 0.5) {
    finalRating += 0.5;
  }

  const starsArray: JSX.Element[] = [];
  const fullStars = Math.floor(finalRating);
  const hasHalfStars = finalRating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    starsArray.push(<StarFilled width={20} />);
  }

  if (hasHalfStars) {
    starsArray.push(
      <StarHalf className="fill-yellow-400 text-yellow-400" width={20} />,
    );
  }

  return <div className="flex gap-1">{starsArray}</div>;
}

export const testimonials: Testimonials[] = [
  {
    rating: 4.5,
    clientName: "João",
    description:
      "Em poucas horas colocamos a landing no ar. Leve, moderna e convertendo bem.",
    clientStatus: "Satisfeito",
  },
  {
    description:
      "Em poucas horas colocamos a landing no ar. Leve, moderna e convertendo bem.",
    clientStatus: "Natallya, Muito Satisfeita",
    rating: 5,
  },
  {
    rating: 4.9,
    description:
      "Em poucas horas colocamos a landing no ar. Leve, moderna e convertendo bem.",
    clientStatus: "Gabriel, Satisfeito",
  },
];
