import { Shield, Star, Zap } from "lucide-react";
import type { JSX } from "react";

export type Resources = {
  title: string;
  description: string;
  icon: JSX.Element;
};

export const resources: Resources[] = [
  {
    title: "Design Responsivo",
    description: "Funciona em qualquer tela.",
    icon: <Zap className="text-red-500" />,
  },
  {
    title: "SEO Básico",
    description: "Estrutura semântica pronta.",
    icon: <Shield className="text-sky-500" />,
  },
  {
    title: "Performance",
    description: "Tailwind + Vite rápidos.",
    icon: <Star className="text-yellow-500" />,
  },
  {
    title: "Acessibilidade",
    description: "Foco e constraste adequados",
    icon: <Zap className="text-emerald-500" />,
  },
  {
    title: "Componentes Limpos",
    description: "Código simples para escalar.",
    icon: <Shield className="text-purple-500" />,
  },
  {
    title: "Sem Dependências Pesadas",
    description: "Somente o essencial.",
    icon: <Star className="text-orange-500" />,
  },
];
