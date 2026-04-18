import ProjectCard from "./ProjectCard";
import { projects } from "../../../public/Data/Projects";

const ProjectsGrid = ({ activeFilter }) => {
  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tag === activeFilter);

  return (
    <section className="px-6 pb-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {filtered.map((project, i) => (
          <ProjectCard
            key={i}
            project={project}
            variant="default"
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;