import About from "./About";
import CTA from "./CTA";
import FeaturedProjects from "./FeaturedProjects";
import Hero from "./Hero";
import Process from "./Process";
import Services from "./Services";
import Stats from "./Stats";
import Testmonials from "./Testmonials";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="overflow-hidden">
      
      <Helmet>
        <title>Adrian Cole | UI/UX Designer & Frontend Developer</title>

        <meta
          name="description"
          content="Adrian Cole is a professional UI/UX Designer and Frontend Developer specializing in modern, responsive, and user-centered web experiences. Explore projects, case studies, and creative solutions."
        />

        <meta
          name="keywords"
          content="UI/UX Designer, Frontend Developer, Portfolio, React Developer, Web Design"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Adrian Cole | UI/UX Designer Portfolio"
        />
        <meta
          property="og:description"
          content="Explore modern UI/UX design and frontend development projects by Adrian Cole."
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="https://i.ibb.co.com/sdnRqr8d/1665051423857-min-1.jpg" />
      </Helmet>
      <Hero />
      <Stats />
      <About />
      <Services />
      <FeaturedProjects />
      <Process />
      <Testmonials />
      <CTA />
    </div>
  );
};

export default Home;
