// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaReact, FaFigma, FaCode, FaPaintBrush } from "react-icons/fa";
import profileImg from "../../../public/Images/own.png";

const AboutHero = () => {
  return (
    <section className="py-20 md:min-h-screen flex items-center px-6 relative overflow-hidden">

      {/* floating icons (hide on small) */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="hidden md:block absolute top-20 left-10 text-[#FF8C69] text-3xl"
      >
        <FaReact />
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="hidden md:block absolute bottom-20 left-16 text-[#C46A3C] text-3xl"
      >
        <FaFigma />
      </motion.div>

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 4.5 }}
        className="hidden md:block absolute top-32 right-16 text-[#B23A48] text-3xl"
      >
        <FaPaintBrush />
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="hidden md:block absolute bottom-16 right-10 text-[#FFB38A] text-3xl"
      >
        <FaCode />
      </motion.div>

      {/* main content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">

        {/* IMAGE FIRST (mobile) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="order-1 md:order-2 flex justify-center"
        >
          {/* blob shape */}
          <div className="relative w-64 sm:w-72 md:w-96 aspect-square">
            
            <div className="absolute inset-0 bg-[#FFB38A]/30 blur-3xl rounded-full"></div>

            <img
              src={profileImg}
              alt="owner"
              className="
                relative w-full h-full object-cover
                shadow-xl border-4 border-[#FF8C69]/30
                transition duration-500 hover:scale-105
              "
              style={{
                borderRadius: "60% 40% 50% 70% / 60% 50% 70% 40%",
              }}
            />
          </div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          className="order-2 md:order-1 text-center md:text-left"
        >
          <p className="text-xs sm:text-sm text-[#FF8C69] font-medium mb-2">
            About Me
          </p>

          <h1 className="
            text-2xl sm:text-3xl md:text-5xl lg:text-6xl
            font-bold leading-tight
            text-[#5A2E1B] dark:text-white
          ">
            I'm <span className="text-[#FF8C69]">Adrian Cole</span>
            <br />
            Creative Developer & Designer
          </h1>

          <p className="
            mt-4 sm:mt-6
            text-xs sm:text-sm md:text-lg
            text-[#7A4A33] dark:text-[#E7B7A3]
            leading-relaxed max-w-xl mx-auto md:mx-0
          ">
            I build modern, user-focused digital experiences combining UI/UX
            design with high-performance frontend development. My goal is to
            create products that are visually stunning and highly effective.
          </p>

          {/* highlights */}
          <div className="mt-5 sm:mt-6 flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 text-xs sm:text-sm">
            <span className="px-3 py-1.5 rounded-full bg-[#FF8C69]/15 text-[#5A2E1B] dark:text-[#F3D6E4]">
              2+ Years
            </span>
            <span className="px-3 py-1.5 rounded-full bg-[#FF8C69]/15 text-[#5A2E1B] dark:text-[#F3D6E4]">
              30+ Projects
            </span>
            <span className="px-3 py-1.5 rounded-full bg-[#FF8C69]/15 text-[#5A2E1B] dark:text-[#F3D6E4]">
              UI/UX + React
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutHero;