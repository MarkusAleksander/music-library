import { twMerge } from "tailwind-merge";

const NavButton = ({
  onClick,
  children,
  className,
}: {
  onClick: () => void;
  children: string | React.ReactNode;
  className?: string;
}) => (
  <button onClick={onClick} className={twMerge("", className ?? "")}>
    {children}
  </button>
);

export default NavButton;
