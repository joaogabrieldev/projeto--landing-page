import { Zap, Image, Settings, Hand, Layers, Package } from "lucide-react";
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
    icon: <Image className="text-red-500" />,
  },
  {
    title: "SEO Básico",
    description: "Estrutura semântica pronta.",
    icon: <Settings className="text-sky-500" />,
  },
  {
    title: "Performance",
    description: "Tailwind + Vite rápidos.",
    icon: <Zap className="text-yellow-500" />,
  },
  {
    title: "Acessibilidade",
    description: "Foco e constraste adequados",
    icon: <Hand className="text-emerald-500" />,
  },
  {
    title: "Componentes Limpos",
    description: "Código simples para escalar.",
    icon: <Layers className="text-purple-500" />,
  },
  {
    title: "Sem Dependências Pesadas",
    description: "Somente o essencial.",
    icon: <Package className="text-orange-500" />,
  },
];
