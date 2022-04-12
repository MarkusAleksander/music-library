import useAuth0 from "../../utils/Auth0/useAuth0";

const LogoutBtn = () => {
  const { logout } = useAuth0();

  return <button onClick={logout}>Log out</button>;
};

export default LogoutBtn;
