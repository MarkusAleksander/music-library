import Header from "../UI/Header/Header";
import Navigation from "../UI/Navigation/Navigation";
import { NavLink } from "react-router-dom";

const AppHeader = ({ auth }: { auth: any }) => (
  <Header>
    <Navigation>
      <ul role="menu">
        <li role="menuitem">
          <NavLink to="/">Search</NavLink>
        </li>
        <li role="menuitem">
          <NavLink to="/artists">Artists</NavLink>
        </li>
        <li role="menuitem">
          <NavLink to="/albums">Albums</NavLink>
        </li>
        <li>
          <button onClick={auth.isAuthenticated() ? auth.logout : auth.login}>
            {auth.isAuthenticated() ? "log out" : "log in"}
          </button>
        </li>
      </ul>
    </Navigation>
  </Header>
);

export default AppHeader;
