/**
 * Code adapted from Auth0-react
 */

import { useContext } from "react";
import Auth0Context from "./Auth0Context";

/**
 * Auth0 hook
 */
const useAuth0 = () => useContext(Auth0Context);

export default useAuth0;
