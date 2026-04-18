// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaRocket, FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router";

const features = ["Fast Delivery", "Clean UI Design", "Scalable Code"];

const ProjectsCTA = () => {
  return (
    <section  className="py-28 px-6 bg-[#FFF1E6] dark:bg-[#1A1412] relative overflow-hidden">
      {/* background glow */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute w-72 h-72 bg-[#FF8C69]/20 rounded-full blur-3xl top-10 left-10"
      />

      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 7 }}
        className="absolute w-72 h-72 bg-[#FFD6A5]/20 rounded-full blur-3xl bottom-10 right-10"
      />

      <div className="max-w-4xl mx-auto text-center relative">
        {/* badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="
            inline-flex items-center gap-2
            px-4 py-1 mb-6
            rounded-full
            bg-[#FF8C69]/15
            text-[#5A2E1B] dark:text-[#F3D6E4]
            text-sm
          "
        >
          <FaRocket />
          Available for new projects
        </motion.div>

        {/* title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="
            text-3xl md:text-5xl font-bold
            text-[#5A2E1B] dark:text-white
            leading-tight
          "
        >
          Have a Project in Mind?
          <br />
          <span className="text-[#FF8C69]">Let’s Build Something Great</span>
        </motion.h2>

        {/* description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="
            mt-6 text-sm md:text-lg
            text-[#7A4A33] dark:text-[#C9A89A]
            max-w-2xl mx-auto
          "
        >
          I help businesses and startups create modern, high-performing digital
          products that are visually stunning and conversion-focused.
        </motion.p>

        {/* features */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
          {features.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-[#5A2E1B] dark:text-[#F3D6E4]"
            >
              <FaCheckCircle className="text-[#FF8C69]" />
              {item}
            </div>
          ))}
        </div>

        {/* buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to={"/contact"}
            className="
              flex items-center justify-center gap-2
              px-7 py-3 rounded-full
              bg-[#FF8C69] text-white
              hover:bg-[#ff7a55]
              hover:scale-105
              transition-all duration-300
              shadow-md
            "
          >
            Start a Project <FaArrowRight />
          </Link>

          <button
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="
              px-7 py-3 rounded-full
              border border-[#FF8C69]/40
              text-[#5A2E1B] dark:text-white
              hover:bg-[#FF8C69]/10
              hover:scale-105
              transition-all duration-300
            "
          >
            View Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCTA;
