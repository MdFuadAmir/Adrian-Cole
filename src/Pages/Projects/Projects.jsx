import { useState } from "react";
import ProjectsCTA from "./ProjectsCTA";
import ProjectsFilter from "./ProjectsFilter";
import ProjectsGrid from "./ProjectsGrid";
import ProjectsHero from "./ProjectsHero";
import { Helmet } from "react-helmet";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  return (
    <div
      id="projects"
      className="bg-[#FFF1E6] dark:bg-[#1A1412] overflow-hidden py-24"
    >
      <Helmet>
        <title>Projects | Adrian Cole - UI/UX & Web Development Work</title>

        <meta
          name="description"
          content="Explore UI/UX design and frontend development projects by Adrian Cole. Modern, responsive and real-world portfolio case studies."
        />

        <meta
          name="keywords"
          content="UI UX Projects, Web Development Portfolio, React Projects, Design Case Studies"
        />

        <meta property="og:title" content="Projects | Adrian Cole Portfolio" />
        <meta
          property="og:description"
          content="Showcasing modern UI/UX and frontend development projects."
        />
      </Helmet>
      <ProjectsHero />
      <ProjectsFilter
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <ProjectsGrid activeFilter={activeFilter} />
      <ProjectsCTA />
    </div>
  );
};

export default Projects;
