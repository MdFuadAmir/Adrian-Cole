// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import AboutHero from "./AboutHero";
import AboutJourney from "./AboutJourney";
import AboutExperience from "./AboutExperience";
import AboutCTA from "./AboutCTA";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div className="overflow-hidden bg-[#FFF1E6] dark:bg-[#1A1412]">
      <Helmet>
        <title>About | Adrian Cole - UI/UX Designer & Frontend Developer</title>

        <meta
          name="description"
          content="Learn more about Adrian Cole, a UI/UX Designer and Frontend Developer passionate about creating modern, user-friendly, and responsive digital experiences."
        />

        <meta
          name="keywords"
          content="About Adrian Cole, UI/UX Designer, Frontend Developer, Web Designer Portfolio"
        />

        <meta
          property="og:title"
          content="About Adrian Cole | UI/UX Designer"
        />
        <meta
          property="og:description"
          content="Discover skills, experience, and design approach of Adrian Cole."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <AboutHero />
      <AboutJourney />
      <AboutExperience />
      <AboutCTA />
    </div>
  );
};

export default About;
