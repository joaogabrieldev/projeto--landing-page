import { Check } from "lucide-react";
import type { ICheckProps } from "../types/pieces.types";

const CheckIcon = ({ iconWidth }: ICheckProps) => {
  return <Check className="text-fuchsia-500" width={iconWidth} />;
};

export default CheckIcon;
