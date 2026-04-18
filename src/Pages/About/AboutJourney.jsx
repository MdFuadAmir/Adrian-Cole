// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaFigma, FaLaptopCode, FaPaintBrush, FaReact } from "react-icons/fa";

const skills = [
  { icon: FaFigma, name: "UI/UX Design" },
  { icon: FaReact, name: "React Development" },
  { icon: FaLaptopCode, name: "Frontend Engineering" },
  { icon: FaPaintBrush, name: "Visual Design" },
];
const AboutJourney = () => {
  return (
    <section className="py-10 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      {/* LEFT TEXT */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      >
        <h2 className="text-3xl font-bold text-[#5A2E1B] dark:text-[#F3D6E4]">
          My Journey
        </h2>

        <p className="mt-6 text-[#7A4A33] dark:text-[#E7B7A3] leading-relaxed">
          My journey started with curiosity — turning simple ideas into
          meaningful digital experiences. Over time, I mastered UI/UX design and
          frontend development to build products that not only look great but
          perform flawlessly.
        </p>

        <p className="mt-4 text-[#7A4A33] dark:text-[#E7B7A3]">
          Today, I focus on creating modern, scalable, and user-centered
          interfaces that help businesses grow and stand out.
        </p>
      </motion.div>

      {/* RIGHT FLOATING CARDS */}
      <div className="relative h-100">
        {skills.map((skill, i) => {
          const Icon = skill.icon;

          return (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4 + i,
              }}
              whileHover={{ scale: 1.1 }}
              className={`
                  absolute p-5 rounded-2xl
                  bg-white/40 dark:bg-[#2A1E1A]
                  backdrop-blur-md
                  border border-[#FF8C69]/20
                  shadow-md
                  cursor-pointer
                `}
              style={{
                top: `${i * 80}px`,
                left: i % 2 === 0 ? "0%" : "50%",
              }}
            >
              <Icon className="text-2xl text-[#FF8C69]" />
              <p className="mt-2 text-sm text-[#5A2E1B] dark:text-[#F3D6E4]">
                {skill.name}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutJourney;
