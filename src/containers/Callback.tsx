import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth0 from "../utils/Auth0/useAuth0";

const Callback = () => {
  const { handleAuth, isAuthenticated } = useAuth0();

  const navigate = useNavigate();

  useEffect(() => {
    // * Handle auth when component is mounted
    handleAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      // * if authorised, then redirect
      navigate(`/`, { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return (
    <div>
      <h1>I am the callback component</h1>
    </div>
  );
};

export default Callback;
