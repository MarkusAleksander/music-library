import { twMerge } from "tailwind-merge";

/**
 * * Section wrapping layout component
 */

const Section = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={twMerge(``, className ?? "")}>{children}</div>;

export default Section;
