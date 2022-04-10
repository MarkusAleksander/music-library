import AppHeader from "./components/AppHeader/AppHeader";
import Footer from "./components/UI/Footer/Footer";
import Paragraph from "./components/UI/Typography/Paragraph";

import { Routes, Route } from "react-router-dom";
import Search from "./containers/Search";
import Albums from "./containers/Albums";
import Artists from "./containers/Artists";

/**
 * * App wrapper
 */
const App = () => {
  return (
    <div className="App">
      <AppHeader />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/artists" element={<Artists />} />
      </Routes>
      <Footer>
        <Paragraph>Footer</Paragraph>
      </Footer>
    </div>
  );
};

export default App;
