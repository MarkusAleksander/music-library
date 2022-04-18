/**
 * Code adapted from Auth0-react
 */

import { createContext } from "react";

/**
 * * Context for Auth0
 */

interface Auth0ContextInterface {
  logout: () => void;
  login: () => void;
  handleAuth: () => void;
  getAccessToken: () => string;
  isAuthenticated: boolean;
}

/**
 * * Initial context set
 */
const initialContext: Auth0ContextInterface = {
  logout: () => {},
  login: () => {},
  handleAuth: () => {},
  getAccessToken: () => ``,
  isAuthenticated: false,
};

const Auth0Context = createContext(initialContext);

export default Auth0Context;
