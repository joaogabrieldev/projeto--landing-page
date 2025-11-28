import { ArrowRight } from "lucide-react";
import { defaultTransition } from "../../utils/defaultVariables";

interface ButtonProps {
  label: string;
  slug: string;
  width: number;
}

const PrimaryButton = ({ label, slug, width }: ButtonProps) => {
  return (
    <a
      href={slug}
      className={`flex w-fit flex-row items-center gap-1.5 rounded-xl bg-fuchsia-500 px-5 py-2 font-semibold text-white ${defaultTransition} hover:bg-fuchsia-600`}
    >
      {label}
      <ArrowRight width={width} className="flex items-center justify-center" />
    </a>
  );
};

export default PrimaryButton;
