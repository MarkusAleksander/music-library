import useAuth0 from "../../utils/Auth0/useAuth0";

const LoginBtn = () => {
  const { login } = useAuth0();

  return <button onClick={login}>Login</button>;
};

export default LoginBtn;
