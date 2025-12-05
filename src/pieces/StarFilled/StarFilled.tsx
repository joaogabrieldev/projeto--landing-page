import { Star } from "lucide-react";
import type { IStarProps } from "../types/pieces.types";

const StarFilled = ({ key, width }: IStarProps) => {
  return (
    <Star key={key} width={width} className="fill-yellow-400 text-yellow-400" />
  );
};

export default StarFilled;
