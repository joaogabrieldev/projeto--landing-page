import { defaultTransition } from "../../utils/defaultVariables";
import type { ISecondButtonProps } from "../types/components.types";

const SecondaryButton = ({ label, slug }: ISecondButtonProps) => {
  return (
    <a
      href={slug}
      className={`flex w-fit flex-row items-center gap-1.5 rounded-xl border-2 border-gray-700 px-6 py-3 font-medium text-white select-none ${defaultTransition} hover:border-gray-500`}
    >
      {label}
    </a>
  );
};

export default SecondaryButton;
