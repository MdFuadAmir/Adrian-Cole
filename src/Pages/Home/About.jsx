// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaReact,
  FaFigma,
  FaPaintBrush,
  FaCode,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

import profileImg from "../../../public/Images/own.png";
import { useNavigate } from "react-router";

const About = () => {
  const navigate = useNavigate();
  return (
    <section id="about" className="py-24 px-6 bg-[#FFF1E6] dark:bg-[#1A1412]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center"
        >
          {/* decorative bg */}
          <div className="absolute w-72 h-72 bg-[#FFB38A]/30 rounded-full blur-3xl"></div>

          <img
            src={profileImg}
            alt="Adrian Cole"
            className="relative w-96 h-120 object-cover rounded-3xl border-4 border-[#FF8C69]/30 shadow-xl transition-all duration-500
    hover:scale-105 hover:rotate-2  hover:shadow-[0_20px_60px_rgba(255,140,105,0.3)]"
          />
          {/* floating icons */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute top-5 left-5 text-[#FF8C69] text-2xl"
          >
            <FaReact />
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute bottom-10 left-0 text-[#C46A3C] text-2xl"
          >
            <FaFigma />
          </motion.div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 3.5 }}
            className="absolute top-10 right-0 text-[#B23A48] text-2xl"
          >
            <FaPaintBrush />
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 4.2 }}
            className="absolute bottom-5 right-5 text-[#FFB38A] text-2xl"
          >
            <FaCode />
          </motion.div>
        </motion.div>

        {/* TEXT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#5A2E1B] dark:text-[#F3D6E4]">
            About Me
          </h2>

          <p className="mt-6 text-[#7A4A33] dark:text-[#E7B7A3] leading-relaxed">
            I’m{" "}
            <span className="text-[#FF8C69] font-semibold">Adrian Cole</span>, a
            UI/UX Designer & Frontend Developer focused on building modern,
            user-friendly and high-converting digital experiences.
          </p>

          <p className="mt-4 text-[#7A4A33] dark:text-[#E7B7A3] leading-relaxed">
            I specialize in React, UI systems, and animation-driven interfaces
            that bring ideas to life with smooth interactions.
          </p>
          <ul className="mt-6 space-y-4 text-sm md:text-base text-[#7A4A33] dark:text-[#E7B7A3]">
            {[
              "UI/UX Design for modern web apps",
              "React frontend development",
              "Component-based design systems",
              "Animation & interactive UI",
            ].map((item, i) => (
              <li
                key={i}
                className="
        flex items-start gap-3
        transition-all duration-300
        hover:translate-x-2
        cursor-pointer
      "
              >
                <FaCheckCircle className="text-[#FF8C69] mt-1 shrink-0" />

                <span className="transition-colors duration-300 hover:text-[#FF8C69]">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* skills chips */}
          <div className="mt-6 flex flex-wrap gap-3">
            {["UI/UX Design", "React Development", "Motion UI"].map(
              (item, i) => (
                <span
                  key={i}
                  className="
        px-4 py-2 rounded-full text-sm
        bg-[#FF8C69]/15 text-[#5A2E1B]
        dark:text-[#F3D6E4]
        border border-[#FF8C69]/20
        cursor-pointer
        transition-all duration-300
        hover:scale-110
        hover:bg-[#FF8C69]
        hover:text-white
        hover:shadow-lg
      "
                >
                  {item}
                </span>
              ),
            )}
          </div>
          {/* CTA */}
          <div className="mt-8 flex gap-4">
            <a href="https://docs.google.com/document/d/12K2cXFu7bpCguwRwaytDKMEsww5fUsbcZP4UmAU-N6E/export?format=pdf" className="px-6 py-3 rounded-full bg-[#FF8C69] text-white hover:bg-[#ff7a55] transition">
              Download CV
            </a>

            <button onClick={()=>navigate('/about')} className="flex cursor-pointer items-center gap-2 px-6 py-3 rounded-full border border-[#FF8C69]/40 text-[#5A2E1B] dark:text-[#F3D6E4] hover:bg-[#FF8C69]/10 transition">
              Read More <FaArrowRight/>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;


