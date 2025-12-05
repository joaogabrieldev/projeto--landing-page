import type { INavButtonProps } from "../types/components.types";
import "./NavButton.css";

function Navigation(slug: string): void {
  const section = document.getElementById(slug) as HTMLDivElement;

  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

const NavButton = ({ slug, label }: INavButtonProps) => {
  return (
    <button id="navButton" type="button" onClick={() => Navigation(slug)}>
      {label}
    </button>
  );
};

export default NavButton;
