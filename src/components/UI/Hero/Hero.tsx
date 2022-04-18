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
  <div className={twMerge(`bg-emerald-500 h-60 relative`, className ?? "")}>
    <div className="absolute bottom-6 left-6 right-6">{children}</div>
  </div>
);

export default Hero;
