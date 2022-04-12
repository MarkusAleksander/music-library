import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import Auth0Provider from "./utils/Auth0/Auth0Provider";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Auth0Provider
        domain={process.env.REACT_APP_AUTH0_SPOTIFY_DOMAIN ?? ""}
        clientId={process.env.REACT_APP_AUTH0_SPOTIFY_CLIENTID ?? ""}
        redirectUri={`${window.location.protocol}//${window.location.host}/${process.env.REACT_APP_AUTH0_SPOTIFY_CALLBACK_URL}`}
        responseType={`token`}
        scope={`user-library-read`}
      >
        <App />
      </Auth0Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
