import Hero from "../components/UI/Hero/Hero";
import Section from "../components/UI/Section/Section";
import Heading from "../components/UI/Typography/Heading";

/**
 * * Container for Viewing saved Artists
 */
const Artists = () => (
  <>
    <Section>
      <Hero>
        <Heading level={1}>Artists</Heading>
        <Heading level={2}>View all artists</Heading>
      </Hero>
    </Section>
    <Section>
      <p>Artists</p>
    </Section>
  </>
);

export default Artists;
