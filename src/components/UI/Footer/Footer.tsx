import { twMerge } from "tailwind-merge";

/**
 * * Footer wrapping component
 */
const Footer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <footer className={twMerge(``, className ?? "")}>{children}</footer>;

export default Footer;
