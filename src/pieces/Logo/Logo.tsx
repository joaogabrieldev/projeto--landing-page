import { Sparkles } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex flex-row items-center gap-2 select-none">
      <Sparkles className="text-fuchsia-400" width={20} height={20} />
      <h1 className="font-bold text-white">Minha Marca</h1>
    </div>
  );
};

export default Logo;
