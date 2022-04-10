import AppHeader from "./components/AppHeader/AppHeader";
import Footer from "./components/UI/Footer/Footer";
import Paragraph from "./components/UI/Typography/Paragraph";

/**
 * * App wrapper
 */
const App = () => {
  return (
    <div className="App">
      <AppHeader />

      <Footer>
        <Paragraph>Footer</Paragraph>
      </Footer>
    </div>
  );
};

export default App;
