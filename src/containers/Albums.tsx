import Hero from "../components/UI/Hero/Hero";
import Section from "../components/UI/Section/Section";
import Heading from "../components/UI/Typography/Heading";

/**
 * * Container for Viewing saved Albums
 */
const Albums = () => (
  <>
    <Section>
      <Hero>
        <Heading level={1}>Albums</Heading>
        <Heading level={2}>View all albums</Heading>
      </Hero>
    </Section>
    <Section>
      <p>Albums</p>
    </Section>
  </>
);

export default Albums;
