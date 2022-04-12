import Header from "../UI/Header/Header";
import Navigation from "../UI/Navigation/Navigation";
import { NavLink } from "react-router-dom";
import useAuth0 from "../../utils/Auth0/useAuth0";
import LogoutBtn from "../LogoutBtn/LogoutBtn";
import LoginBtn from "../LoginBtn/LoginBtn";

const AppHeader = () => {
  const { isAuthenticated } = useAuth0();
  console.log("[Appheader] Rendering");
  return (
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
          <li>{isAuthenticated ? <LogoutBtn /> : <LoginBtn />}</li>
        </ul>
      </Navigation>
    </Header>
  );
};

export default AppHeader;
