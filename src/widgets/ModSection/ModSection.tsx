import type { IModSectionProps } from "../types/widgets.types";

const ModSection = ({ children, id }: IModSectionProps) => {
  return (
    <section className="relative z-1 overflow-hidden" id={id}>
      {children}
    </section>
  );
};

export default ModSection;
