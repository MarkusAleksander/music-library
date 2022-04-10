import { twMerge } from "tailwind-merge";

/**
 * * Heading component
 */
const Heading = ({
  children,
  level,
  className,
}: {
  children: string | React.ReactNode;
  level: number;
  className?: string;
}) => {
  if (!(level > 0) && !(level < 7)) {
    console.warn(`Invalid heading level provided: ${level}`);
    return null;
  }

  const RenderedLevel = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <RenderedLevel className={twMerge(``, className ?? "")}>
      {children}
    </RenderedLevel>
  );
};

export default Heading;
