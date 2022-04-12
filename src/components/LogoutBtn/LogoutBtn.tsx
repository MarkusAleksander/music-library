import useAuth0 from "../../utils/Auth0/useAuth0";
import NavButton from "../UI/NavItem/NavButton";

const LogoutBtn = ({ className }: { className?: string }) => {
  const { logout } = useAuth0();

  return (
    <NavButton className={className} onClick={logout}>
      Log out
    </NavButton>
  );
};

export default LogoutBtn;
