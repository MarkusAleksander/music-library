import { twMerge } from "tailwind-merge";

/**
 * * Header wrapping component
 */
const Header = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <header className={twMerge(`w-full`, className ?? "")}>{children}</header>
);

export default Header;
