import { twMerge } from "tailwind-merge";

/**
 * * Button component
 */
const Button = ({
  content,
  onClick,
  title,
  className,
}: {
  content: string | React.ReactNode;
  onClick: (e: React.SyntheticEvent) => void;
  title?: string;
  className?: string;
}) => (
  <button
    className={twMerge(``, className ?? "")}
    onClick={onClick}
    title={title}
  >
    {content}
  </button>
);

export default Button;
