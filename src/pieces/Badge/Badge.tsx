import type { IPriceBadgeProps } from "../types/pieces.types";


const Badge = ({ label }: IPriceBadgeProps) => {
  return (
    <div className="flex items-center justify-center rounded-2xl bg-fuchsia-600">
      <span className="px-3 py-1 text-xs font-bold text-white select-none">
        {label.toUpperCase()}
      </span>
    </div>
  );
};

export default Badge;
