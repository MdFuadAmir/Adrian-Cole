import { useParams, useNavigate } from "react-router";
import { projects } from "../../../public/Data/Projects";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="p-10 text-center text-gray-700 dark:text-gray-300">
        Project not found
      </div>
    );
  }

  return (
    <section className="md:min-h-screen bg-[#FFF1E6] dark:bg-[#1A1412] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* back */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center cursor-pointer gap-2 mb-4 text-[#5A2E1B] dark:text-gray-200 hover:gap-3 transition"
        >
          <FaArrowLeft /> Back
        </button>

        {/* image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-100 object-cover"
          />
        </div>

        {/* tag */}
        <span className="inline-block mt-6 px-4 py-1 text-sm rounded-full bg-[#FF8C69] text-white">
          {project.tag}
        </span>

        {/* title */}
        <h1 className="text-4xl font-bold mt-4 text-[#5A2E1B] dark:text-[#eed5cb]">
          {project.title}
        </h1>

        {/* description */}
        <p className="mt-4 text-[#7A4A33] dark:text-[#E7B7A3]  leading-relaxed">
          {project.details}
        </p>

        {/* FEATURES */}
        {project.features && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4 text-[#5A2E1B] dark:text-[#eed5cb]">
              Key Features
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {project.features.map((feature, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white/60 dark:bg-[#2A1E1A] border border-[#FFB38A]/20 text-[#5A2E1B] dark:text-[#E7B7A3]"
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TECH STACK */}
        {project.techStack && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4 text-[#5A2E1B] dark:text-white">
              Tech Stack
            </h2>

            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-1 rounded-full bg-[#FF8C69] text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* buttons */}
        <div className="mt-12 flex gap-4">
          <a
            href={project.liveDemo}
            target="_blank"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FF8C69] text-white hover:opacity-90 transition"
          >
            Live Demo <FaExternalLinkAlt />
          </a>

          <a
            href={project.github}
            target="_blank"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-[#FF8C69] text-[#FF8C69] hover:bg-[#FF8C69] hover:text-white transition"
          >
            GitHub <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
