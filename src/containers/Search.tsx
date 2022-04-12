import Hero from "../components/UI/Hero/Hero";
import Section from "../components/UI/Section/Section";
import Heading from "../components/UI/Typography/Heading";

/**
 * * Container for Searching Spotify
 */
const Search = () => (
  <>
    <Hero>
      <Heading
        level={1}
        className="text-white font-bold text-7xl tracking-wide"
      >
        Search
      </Heading>
      <Heading
        level={2}
        className="text-white font-bold text-4xl mt-4  tracking-wide"
      >
        Search Spotify
      </Heading>
    </Hero>
    <Section>
      <p>Content</p>
    </Section>
  </>
);

export default Search;
