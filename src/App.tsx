import AppHeader from "./components/AppHeader/AppHeader";
import Footer from "./components/UI/Footer/Footer";
import Paragraph from "./components/UI/Typography/Paragraph";

import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Search from "./containers/Search";
import Albums from "./containers/Albums";
import Artists from "./containers/Artists";
import Auth from "./utils/Auth";
import Callback from "./containers/Callback";

/**
 * * App wrapper
 */
const App = () => {
  const navigate = useNavigate();

  const auth = new Auth(navigate);

  return (
    <div className="App">
      <AppHeader auth={auth} />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/callback" element={<Callback auth={auth} />} />
      </Routes>
      <Footer>
        <Paragraph>Footer</Paragraph>
      </Footer>
    </div>
  );
};

export default App;
