// @ts-nocheck
import auth0 from "auth0-js";

export default class Auth {
  constructor(navigate) {
    this.navigate = navigate;
    this.auth0 = new auth0.WebAuth({
      domain: process.env.REACT_APP_AUTH0_SPOTIFY_DOMAIN || "",
      clientID: process.env.REACT_APP_AUTH0_SPOTIFY_CLIENTID || "",
      redirectUri: `${window.location.protocol}//${window.location.host}/${process.env.REACT_APP_AUTH0_SPOTIFY_CALLBACK_URL}`,
      responseType: "token",
      scope: "user-library-read",
    });
  }

  login = () => {
    this.auth0.authorize();
  };

  handleAuth = () => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        this.navigate("/", { replace: true });
      } else if (err) {
        alert(`Error: ${err.error}`);
        console.log(err);
      }
    });
  };

  setSession = (authResult) => {
    //set the time the access token will expire
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );

    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("id_token", authResult.idToken);
    localStorage.setItem("expires_at", expiresAt);
  };

  isAuthenticated = () => {
    const expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    return new Date().getTime() < expiresAt;
  };

  getAccessToken = () => {
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) {
      throw new Error("No access token found");
    }
    return accessToken;
  };

  logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    this.auth0.logout({
      clientID: process.env.REACT_APP_AUTH0_CLIENTID,
      returnTo: "https://localhost:3000",
    });
  };
}
