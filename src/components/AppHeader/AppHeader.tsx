import Header from "../UI/Header/Header";
import Navigation from "../UI/Navigation/Navigation";
import useAuth0 from "../../utils/Auth0/useAuth0";
import LogoutBtn from "../LogoutBtn/LogoutBtn";
import LoginBtn from "../LoginBtn/LoginBtn";
import NavItem from "../UI/NavItem/NavItem";

const HeaderLinkStyle = `bg-emerald-500 h-full text-white font-semibold text-center flex items-center justify-center min-w-[24px] text-sm p-4 border-b-4 border-emerald-500 hover:border-white`;

const AppHeader = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <Header className="flex justify-between items-stretch">
      <Navigation>
        <ul role="menu" className="flex items-stretch h-full">
          <li role="menuitem">
            {isAuthenticated ? (
              <LogoutBtn className={HeaderLinkStyle} />
            ) : (
              <LoginBtn className={HeaderLinkStyle} />
            )}
          </li>
        </ul>
      </Navigation>
      {isAuthenticated && (
        <Navigation>
          <ul role="menu" className="flex items-stretch h-full">
            <li role="menuitem">
              <NavItem className={HeaderLinkStyle} to="/">
                Search
              </NavItem>
            </li>
            <li role="menuitem">
              <NavItem className={HeaderLinkStyle} to="/artists">
                Artists
              </NavItem>
            </li>
            <li role="menuitem">
              <NavItem className={HeaderLinkStyle} to="/albums">
                Albums
              </NavItem>
            </li>
          </ul>
        </Navigation>
      )}
    </Header>
  );
};

export default AppHeader;
