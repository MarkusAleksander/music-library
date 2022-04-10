import Footer from "./components/UI/Footer/Footer";
import Header from "./components/UI/Header/Header";
import Navigation from "./components/UI/Navigation/Navigation";
import Section from "./components/UI/Section/Section";

/**
 * * App wrapper
 */
const App = () => {
  return (
    <div className="App">
      <Header>
        <Navigation>
          <ul></ul>
        </Navigation>
      </Header>
      <Section>
        <p>Content</p>
      </Section>
      <Footer>
        <p>Footer</p>
      </Footer>
    </div>
  );
};

export default App;
