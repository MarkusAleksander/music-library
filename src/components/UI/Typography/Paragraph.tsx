import { twMerge } from "tailwind-merge";

/**
 * * Paragraph component
 */
const Paragraph = ({
  children,
  className,
}: {
  children: string | React.ReactNode;
  className?: string;
}) => <p className={twMerge(``, className ?? "")}>{children}</p>;

export default Paragraph;
