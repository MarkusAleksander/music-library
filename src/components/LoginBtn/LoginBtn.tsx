import useAuth0 from "../../utils/Auth0/useAuth0";
import NavButton from "../UI/NavItem/NavButton";

const LoginBtn = ({ className }: { className?: string }) => {
  const { login } = useAuth0();

  return (
    <NavButton className={className} onClick={login}>
      Login
    </NavButton>
  );
};

export default LoginBtn;
