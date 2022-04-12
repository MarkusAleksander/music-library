import { useEffect } from "react";

const Callback = ({ auth }: { auth: any }) => {
  useEffect(() => {
    auth.handleAuth();
  }, []);

  return (
    <div>
      <h1>I am the callback component</h1>
    </div>
  );
};

export default Callback;
