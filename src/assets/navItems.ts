type NavLinks = {
  id: string;
  title: string;
  slug: string;
};

export const navLinks: NavLinks[] = [
  {
    id: crypto.randomUUID(),
    title: "Recursos",
    slug: "recursos",
  },
  {
    id: crypto.randomUUID(),
    title: "Depoimentos",
    slug: "depoimentos",
  },
  {
    id: crypto.randomUUID(),
    title: "Preços",
    slug: "precos",
  },
  {
    id: crypto.randomUUID(),
    title: "FAQ",
    slug: "faq",
  },
];
