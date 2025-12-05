import { ArrowRight } from "lucide-react";
import { defaultTransition } from "../../utils/defaultVariables";
import type { IPrimaryButtonProps } from "../types/components.types";

const PrimaryButton = ({ label, slug, width }: IPrimaryButtonProps) => {
  return (
    <a
      href={slug}
      className={`flex w-fit flex-row items-center gap-1.5 rounded-xl bg-fuchsia-500 px-5 py-2 font-semibold text-white select-none ${defaultTransition} hover:bg-fuchsia-600`}
    >
      {label}
      <ArrowRight width={width} className="flex items-center justify-center" />
    </a>
  );
};

export default PrimaryButton;
