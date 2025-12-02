import { Star } from "lucide-react";

interface IStarProps {
  key?: number;
  width: number;
  //   classname: string;
}

const StarFilled = ({ key, width }: IStarProps) => {
  return (
    <Star key={key} width={width} className="fill-yellow-400 text-yellow-400" />
  );
};

export default StarFilled;
