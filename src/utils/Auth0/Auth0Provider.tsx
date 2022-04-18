/**
 * Code adapted from Auth0-react
 */

import { useCallback, useMemo, useState } from "react";
import auth0 from "auth0-js";
import Auth0Context from "./Auth0Context";

/**
 * The main configuration to instantiate the `Auth0Provider`.
 */
export interface Auth0ProviderOptions {
  /**
   * The child nodes your Provider has wrapped
   */
  children?: React.ReactNode;

  /**
   * Your Auth0 account domain such as `'example.auth0.com'`,
   * `'example.eu.auth0.com'` or , `'example.mycompany.com'`
   * (when using [custom domains](https://auth0.com/docs/custom-domains))
   */
  domain: string;

  /**
   * The Client ID found on your Application settings page
   */
  clientId: string;

  /**
   * The default URL where Auth0 will redirect your browser to with
   * the authentication result. It must be whitelisted in
   * the "Allowed Callback URLs" field in your Auth0 Application's
   * settings. If not provided here, it should be provided in the other
   * methods that provide authentication.
   */
  redirectUri?: string;

  responseType: string;

  scope: string;
}

const AUTH0_SPOTIFY_ACCESS: string = "AUTH0_SPOTIFY_ACCESS";
const AUTH0_SPOTIFY_EXPIRES: string = "AUTH0_SPOTIFY_EXPIRES";

const Auth0Provider = (opts: Auth0ProviderOptions): JSX.Element => {
  const { children, ...clientOpts } = opts;

  const [auth] = useState(
    () =>
      new auth0.WebAuth({
        domain: clientOpts.domain,
        clientID: clientOpts.clientId,
        redirectUri: clientOpts.redirectUri,
        responseType: clientOpts.responseType,
        scope: clientOpts.scope,
      })
  );

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  /**
   * * Handle Auth0 Login
   */
  const login = useCallback(() => auth.authorize(), [auth]);

  /**
   * * Handle Auth0 Logout
   */
  const logout = useCallback(() => {
    localStorage.removeItem(AUTH0_SPOTIFY_ACCESS);
    // localStorage.removeItem("id_token");
    localStorage.removeItem(AUTH0_SPOTIFY_EXPIRES);
    // * Spotify doesn't have option for Allowed Logout URLs, so it's cleaner to just clear localstorage items
    // auth.logout({
    //     clientID: clientOpts.clientId,
    //     returnTo: clientOpts.redirectUri,
    // });
    setIsAuthenticated(false);
  }, []);

  /**
   * * Set session
   */
  const setSession = (authResult: auth0.Auth0DecodedHash) => {
    //set the time the access token will expire
    const expiresAt = JSON.stringify(
      // @ts-ignore
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    // @ts-ignore
    localStorage.setItem(AUTH0_SPOTIFY_ACCESS, authResult.accessToken);
    // @ts-ignore
    localStorage.setItem("id_token", authResult.idToken);
    localStorage.setItem(AUTH0_SPOTIFY_EXPIRES, expiresAt);
    // * Set is authenticated
    setIsAuthenticated(true);
  };

  /**
   * * Handle Auth0 Login response
   */
  const handleAuth = useCallback(() => {
    auth.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken) {
        setSession(authResult);
      } else if (err) {
        alert(`Error: ${err.error}`);
        console.log(err);
      }
    });
  }, [auth]);

  /**
   * * Get access token
   */
  const getAccessToken = useCallback(() => {
    const accessToken = localStorage.getItem(AUTH0_SPOTIFY_ACCESS);
    if (!accessToken) {
      throw new Error("No access token found");
    }
    return accessToken;
  }, []);

  const contextValue = useMemo(() => {
    return {
      login,
      logout,
      handleAuth,
      getAccessToken,
      isAuthenticated,
    };
  }, [login, logout, handleAuth, getAccessToken, isAuthenticated]);

  return (
    <Auth0Context.Provider value={contextValue}>
      {children}
    </Auth0Context.Provider>
  );
};

export default Auth0Provider;
