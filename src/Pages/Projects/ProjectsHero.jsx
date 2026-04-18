// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const ProjectsHero = () => {
  return (
    <section className="px-6 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#5A2E1B] dark:text-white"
      >
        My <span className="text-[#FF8C69]">Projects</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-6 max-w-2xl mx-auto text-sm md:text-lg text-[#7A4A33] dark:text-[#E7B7A3]"
      >
        A collection of modern, high-quality projects focused on UI/UX,
        performance, and real-world usability.
      </motion.p>
    </section>
  );
};

export default ProjectsHero;