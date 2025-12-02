import type React from "react";

interface IModSectionProps {
  children: React.ReactNode;
}

const ModSection = ({ children }: IModSectionProps) => {
  return (
    <section className="relative z-1 overflow-hidden border-2 border-white">
      {children}
    </section>
  );
};

export default ModSection;
