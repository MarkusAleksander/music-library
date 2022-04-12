import { twMerge } from "tailwind-merge";

/**
 * * Section wrapping layout component
 */

const Section = ({
  children,
  className,
  isFull,
}: {
  children: React.ReactNode;
  className?: string;
  isFull?: boolean;
}) => (
  <div
    className={twMerge(
      `max-w-full p-2 lg:p-4 ${isFull ? "w-full" : "w-[1200px]"}`,
      className ?? ""
    )}
  >
    {children}
  </div>
);

export default Section;
