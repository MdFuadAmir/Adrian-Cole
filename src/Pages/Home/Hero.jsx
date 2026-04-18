// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaFigma,
  FaReact,
  FaPenNib,
  FaPaintBrush,
  FaPalette,
} from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { useNavigate } from "react-router";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="md:min-h-screen flex items-center justify-center px-6 bg-[#FFF1E6] dark:bg-[#1A1412] relative overflow-hidden py-20">
      {/* background glow */}
      <div className="absolute w-80 h-80 bg-[#FFB38A]/30 rounded-full blur-3xl top-10 left-10"></div>
      <div className="absolute w-80 h-80 bg-[#FFD6A5]/20 rounded-full blur-3xl bottom-10 right-10"></div>
      {/* floating icons */}

      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute top-30 left-10 text-[#FF8C69] text-3xl"
      >
        <FaFigma />
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute top-28 right-14 text-[#E6B17E] text-3xl"
      >
        <FaReact />
      </motion.div>

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute bottom-28 left-16 text-[#B23A48] text-3xl"
      >
        <TbBrandFramerMotion />
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 4.5 }}
        className="absolute bottom-20 right-10 text-[#C46A3C] text-3xl"
      >
        <FaPenNib />
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute top-1/2 right-6 text-[#FFB38A] text-3xl"
      >
        <FaPaintBrush />
      </motion.div>

      {/* 🔥 NEW ICON (LEFT SIDE BALANCE) */}
      <motion.div
        animate={{ y: [0, 14, 0] }}
        transition={{ repeat: Infinity, duration: 4.2 }}
        className="absolute  left-8 text-[#D97D54] text-3xl"
      >
        <FaPalette />
      </motion.div>

      {/* content */}
      <div className="max-w-5xl text-center z-10">
        {/* badge */}

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="
    inline-block mb-6 px-4 py-1 rounded-full
    bg-[#FFE0CC]/60
    text-[#7A3E2B]
    dark:bg-[#2A1E1A]
    dark:text-[#FFD6C4]
    text-xs sm:text-sm font-medium
    backdrop-blur-sm
  "
        >
          UI/UX Designer • Frontend Developer
        </motion.div>

        {/* 🔥 NEW UNIQUE HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#5A2E1B] dark:text-[#F3D6E4]"
        >
          Turning ideas into <br />
          <span className="text-[#FF8C69]">meaningful digital experiences</span>
        </motion.h1>

        {/* 🔥 NEW SUBTITLE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 mx-auto max-w-xl text-sm sm:text-base md:text-lg text-[#7A4A33] dark:text-[#E7B7A3]"
        >
          I design intuitive interfaces and build smooth user journeys that help
          brands connect, engage and grow in the digital world.
        </motion.p>

        {/* 🔥 NEW: 6 MINI TEXT CARDS */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl mx-auto">
          {[
            "Clean UI",
            "UX Strategy",
            "Responsive Design",
            "Modern Layouts",
            "User Research",
            "Interactive UI",
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="
                px-3 py-2 rounded-lg
                text-xs sm:text-sm
                bg-[#FFD6A5]/30
                dark:bg-[#2A1E1A]
                text-[#5A2E1B]
                dark:text-[#E7B7A3]
                border border-[#FFB38A]/20
              "
            >
              {item}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex gap-4 justify-center text-sm md:text-base"
        >
          <button
            onClick={() => navigate("/projects")}
            className="px-6 py-3 rounded-full bg-[#FF8C69] hover:bg-[#ff7a55] text-white font-medium shadow-md shadow-[#FF8C69]/30"
          >
            View Projects
          </button>

          <button
            onClick={() => navigate("/contact")}
            className="px-6 py-3 rounded-full border border-[#FF8C69]/40 text-[#5A2E1B] dark:text-[#F3D6E4] hover:bg-[#FF8C69]/10 "
          >
            Contact Me
          </button>
        </motion.div>

        {/* micro line */}
        <p className="mt-6 text-xs sm:text-sm text-[#7A4A33]/70 dark:text-[#E7B7A3]/70">
          Available for freelance work • Open for collaboration
        </p>
      </div>
    </section>
  );
};

export default Hero;
