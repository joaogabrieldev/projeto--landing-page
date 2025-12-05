import { Check } from "lucide-react";

interface ICheckProps {
  iconWidth: number;
}

const CheckIcon = ({ iconWidth }: ICheckProps) => {
  return <Check className="text-fuchsia-500" width={iconWidth} />;
};

export default CheckIcon;
