import { Link } from "react-scroll";
import { defaultTransition } from "../../utils/defaultVariables";
import type { INavLinkProps } from "../types/pieces.types";

const NavLink = ({ title, slug }: INavLinkProps) => {
  return (
    <li className="list-none">
      <Link
        to={slug}
        smooth={true}
        duration={800}
        spy={true}
        activeClass="activeLink"
        className={`cursor-pointer font-semibold text-white hover:text-fuchsia-400 ${defaultTransition}`}
      >
        {title}
      </Link>
    </li>
  );
};

export default NavLink;
