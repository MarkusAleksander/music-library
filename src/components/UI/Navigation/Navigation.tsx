import { twMerge } from "tailwind-merge";

/**
 * * Navigation wrapping component
 */
const Navigation = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <nav className={twMerge(``, className ?? "")}>{children}</nav>;

export default Navigation;
