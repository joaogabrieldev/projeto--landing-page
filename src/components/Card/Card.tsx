import { defaultSelection } from "../../utils/defaultVariables";
import type { ICardProps } from "../types/components.types";

const Card = ({ array }: ICardProps) => {
  return (
    <div className="max-w-xs rounded-2xl border border-gray-800 bg-gray-400/3 px-7 py-6">
      <div className="flex flex-row items-center justify-start gap-2 pb-3">
        {array.icon}
        <span className="font-bold text-white select-none">{array.title}</span>
      </div>
      <div
        className={`text-center font-semibold text-gray-500 ${defaultSelection}`}
      >
        {array.description}
      </div>
    </div>
  );
};

export default Card;
