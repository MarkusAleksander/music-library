import AppHeader from "./components/AppHeader/AppHeader";
import Paragraph from "./components/UI/Typography/Paragraph";

import { Routes, Route } from "react-router-dom";
import Search from "./containers/Search";
import Albums from "./containers/Albums";
import Artists from "./containers/Artists";
import Callback from "./containers/Callback";
import AppFooter from "./components/AppFooter/AppFooter";

/**
 * * App wrapper
 */
const App = () => {
  return (
    <div className="App bg-slate-100 min-h-screen">
      <AppHeader />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/callback" element={<Callback />} />
      </Routes>
      <AppFooter>
        <Paragraph>Footer</Paragraph>
      </AppFooter>
    </div>
  );
};

export default App;
