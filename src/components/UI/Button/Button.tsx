/**
 * * Button component
 */
const Button = ({
  content,
  onClick,
  title,
}: {
  content: string | React.ReactNode;
  onClick: (e: React.SyntheticEvent) => void;
  title?: string;
}) => (
  <button onClick={onClick} title={title}>
    {content}
  </button>
);

export default Button;
