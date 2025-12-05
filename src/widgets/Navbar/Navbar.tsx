import { navLinks } from "../../assets/navItems";

import NavLink from "../../pieces/NavLink/NavLink";
import NavButton from "./../../components/NavButton/NavButton";

const Navbar = () => {
  return (
    <ul className="flex flex-row items-center gap-6 select-none">
      {navLinks.map((item) => {
        return <NavLink key={item.id} slug={item.slug} title={item.title} />;
      })}
      <NavButton slug={"/"} label={"Começar agora!"} />
    </ul>
  );
};

export default Navbar;
