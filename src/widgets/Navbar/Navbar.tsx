import { navLinks } from "../../assets/navItems";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import NavLink from "../../pieces/NavLink/NavLink";

const Navbar = () => {
  return (
    <ul className="flex flex-row items-center gap-6 select-none">
      {navLinks.map((item) => {
        return <NavLink key={item.id} slug={item.slug} title={item.title} />;
      })}
      <PrimaryButton label={"Começar agora!"} slug="/" width={20} />
    </ul>
  );
};

export default Navbar;
