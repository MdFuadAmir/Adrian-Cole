import ProjectCard from "../Projects/ProjectCard";
import { projects } from "../../../public/Data/Projects";

const FeaturedProjects = () => {
  return (
    <section className="py-24 px-6 bg-[#FFF1E6] dark:bg-[#1A1412]">
      <div className="max-w-6xl mx-auto">
        
        {/* heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5A2E1B] dark:text-[#F3D6E4]">
            Featured Projects
          </h2>
          <p className="mt-3 text-[#7A4A33] dark:text-[#E7B7A3]">
            Real projects built with design precision & performance
          </p>
        </div>

        {/* only 3 */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project, i) => (
            <ProjectCard
              key={i}
              project={project}
              variant="featured"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;