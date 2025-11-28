import { Shield, Star, Zap } from "lucide-react";
import type { JSX } from "react";

export type Beneficts = {
  title: string;
  description: string;
  icon: JSX.Element;
};

export const beneficts: Beneficts[] = [
  {
    title: "Velocidade",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    icon: <Zap className="text-emerald-500" />,
  },
  {
    title: "Segurança",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    icon: <Shield className="text-sky-500" />,
  },
  {
    title: "Conversão",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    icon: <Star className="text-yellow-500" />,
  },
];
