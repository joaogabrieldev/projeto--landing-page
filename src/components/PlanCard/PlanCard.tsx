import Badge from "../../pieces/Badge/Badge";
import CheckIListItem from "../../pieces/CheckIListItem/CheckIListItem";
import {
  defaultSelection,
  defaultTransition,
} from "../../utils/defaultVariables";
import type { IPlanCardProps } from "../types/components.types";

const formatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

const PlanCard = ({
  title,
  price,
  originalPrice,
  emphasis,
  description,
  recommendation,
  beneficts,
}: IPlanCardProps) => {
  const hasBadge = emphasis ? (
    <div className="flex justify-start pb-2">
      <Badge label={"Recomendado pelos Clientes"} />
    </div>
  ) : null;

  const hasEmphasis = emphasis
    ? "border-fuchsia-700 bg-fuchsia-700/15 border-3"
    : "border-slate-700 bg-slate-700/10 border-2";

  const buttonEmphasis = emphasis
    ? `bg-fuchsia-500 ${defaultTransition} hover:bg-fuchsia-700 `
    : `bg-slate-900 ${defaultTransition} hover:shadow-md hover:shadow-gray-700/40`;

  return (
    <div className={`rounded-2xl ${hasEmphasis} px-8 py-8 max-w-[530px]`}>
      {hasBadge}
      <div>
        <h1 className="my-2 text-2xl font-bold text-white select-none">
          {title}
        </h1>
        <div className="flex flex-row gap-3 select-none">
          <span className="text-[26px] font-bold text-fuchsia-400">
            {price ? formatter.format(price) : null}
          </span>
          <span className="flex items-end text-lg font-semibold text-gray-500 line-through">
            {originalPrice ? formatter.format(originalPrice) : null}
          </span>
        </div>
        <div
          className={`mt-2 font-semibold text-gray-500 italic ${defaultSelection}`}
        >
          <span>Ideal para: </span>
          <span className={`${defaultSelection}`}>{recommendation}</span>
        </div>
        <div className="my-3 mb-5 max-w-lg">
          <p className={`text-md text-slate-400 ${defaultSelection}`}>
            {description}
          </p>
        </div>
        <div>
          <ul className={`mt-2 mb-8 ${defaultSelection}`}>
            {beneficts.map((item, index) => {
              return (
                <CheckIListItem key={index} label={item.title} iconWidth={20} />
              );
            })}
          </ul>
        </div>
        <div className="w-full">
          <a
            href="#"
            className={`block rounded-lg ${buttonEmphasis} py-2 text-center font-semibold text-white select-none`}
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
