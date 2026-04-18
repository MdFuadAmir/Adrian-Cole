// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router";

const ProjectCard = ({ project, variant = "default" }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="
        group rounded-2xl overflow-hidden
        bg-white/60 dark:bg-[#2A1E1A]
        border border-[#FFB38A]/20
        shadow-md hover:shadow-2xl
        transition
      "
    >
      {/* image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        <span className="absolute top-3 left-3 text-xs px-3 py-1 rounded-full bg-[#FF8C69] text-white">
          {project.tag}
        </span>

        {/* optional overlay only for featured */}
        {variant === "featured" && (
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
        )}
      </div>

      {/* content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-[#5A2E1B] dark:text-white">
          {project.title}
        </h3>

        <p className="mt-2 text-sm text-[#7A4A33] dark:text-[#E7B7A3]">
          {project.desc}
        </p>

        {/* CTA only featured style difference */}
        <button
          onClick={() => navigate(`/projects/${project.id}`)}
          className="mt-5 flex items-center gap-2 text-[#FF8C69] font-medium cursor-pointer group-hover:translate-x-1 transition"
        >
          View Project <FaArrowRight />
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
