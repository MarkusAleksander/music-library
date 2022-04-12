import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const NavItem = ({
  to,
  children,
  className,
  activeClassName,
}: {
  to: string;
  children: string | React.ReactNode;
  className?: string;
  activeClassName?: string;
}) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      twMerge(className ?? "", isActive ? activeClassName : "")
    }
  >
    {children}
  </NavLink>
);

export default NavItem;
