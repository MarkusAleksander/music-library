import { twMerge } from "tailwind-merge";

/**
 * * Hero component
 */

const Hero = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={twMerge(``, className ?? "")}>
    <div>{children}</div>
  </div>
);

export default Hero;
