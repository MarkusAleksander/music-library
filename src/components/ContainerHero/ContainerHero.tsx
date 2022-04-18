import Hero from "../UI/Hero/Hero";
import Heading from "../UI/Typography/Heading";

const ContainerHero = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => (
  <Hero>
    <Heading level={1} className="text-white font-bold text-7xl tracking-wide">
      {title}
    </Heading>
    <Heading
      level={2}
      className="text-white font-bold text-4xl mt-4 tracking-wide"
    >
      {subtitle}
    </Heading>
  </Hero>
);

export default ContainerHero;
