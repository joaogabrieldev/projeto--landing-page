import type { JSX } from "react";

import CheckIcon from "./../pieces/CheckIcon/CheckIcon";
export type Beneficts = {
  title: string;
  icon: JSX.Element;
};

export type Prices = {
  title: string;
  price: number;
  originalPrice?: number | null;
  emphasis: boolean;
  description: string;
  beneficts: Beneficts[];
};

export const prices: Prices[] = [
  {
    title: "Pacote One Page",
    price: 150,
    emphasis: false,
    description:
      "A escolha certa para profissionalizar sua marca, aliando design e alta performance. Um site desenvolvido com código limpo, que carrega rápido em dispositivos móveis e já vem com SEO técnico configurado para destacar sua empresa nos buscadores e atrair mais clientes.",
    beneficts: [
      {
        title: "Design moderno e responsivo",
        icon: <CheckIcon />,
      },
      {
        title: "Design responsivo e moderno",
        icon: <CheckIcon />,
      },
      {
        title: "Design responsivo e moderno",
        icon: <CheckIcon />,
      },
      {
        title: "Design responsivo e moderno",
        icon: <CheckIcon />,
      },
      {
        title: "Design responsivo e moderno",
        icon: <CheckIcon />,
      },
    ],
  },
  {
    title: "Pacote Standard",
    price: 300,
    emphasis: false,
    description:
      "A escolha certa para profissionalizar sua marca, aliando design e alta performance. Um site desenvolvido com código limpo, que carrega rápido em dispositivos móveis e já vem com SEO técnico configurado para destacar sua empresa nos buscadores e atrair mais clientes.",
    beneficts: [
      {
        title: "Design moderno e responsivo",
        icon: <CheckIcon />,
      },
      {
        title: "Design responsivo e moderno",
        icon: <CheckIcon />,
      },
      {
        title: "Design responsivo e moderno",
        icon: <CheckIcon />,
      },
      {
        title: "Design responsivo e moderno",
        icon: <CheckIcon />,
      },
      {
        title: "Design responsivo e moderno",
        icon: <CheckIcon />,
      },
    ],
  },
];
