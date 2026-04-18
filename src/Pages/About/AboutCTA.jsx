// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import { useNavigate } from "react-router";

const AboutCTA = () => {
  const navigate = useNavigate();
  return (
    <section className="py-28 text-center px-6">
      <motion.h2
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="text-3xl md:text-5xl font-bold text-[#5A2E1B] dark:text-[#F3D6E4]"
      >
        Let’s Build Something <span className="text-[#FF8C69]">Amazing</span>
      </motion.h2>

      <p className="mt-6 text-[#7A4A33] dark:text-[#E7B7A3] max-w-xl mx-auto">
        If you’re looking for a designer & developer who understands both
        aesthetics and performance — let’s work together.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm">
        {["Fast Delivery", "Clean Code", "Modern UI", "Responsive Design"].map(
          (item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="px-4 py-2 rounded-full bg-[#FF8C69]/20 dark:bg-[#FF8C69]/10 dark:text-[#FFD6C2]"
            >
              {item}
            </motion.div>
          ),
        )}
      </div>

      <div className="mt-8 flex justify-center items-center gap-4 text-sm md:text-base">
        <a
          href="https://docs.google.com/document/d/12K2cXFu7bpCguwRwaytDKMEsww5fUsbcZP4UmAU-N6E/export?format=pdf"
          className="px-6 py-3 flex items-center gap-2 rounded-full bg-[#FF8C69] text-white hover:bg-[#ff7a55] transition"
        >
          Download CV <FaDownload />
        </a>
        <button
          onClick={() => navigate("/contact")}
          className="flex cursor-pointer items-center gap-2 px-6 py-3 rounded-full border border-[#FF8C69]/40 text-[#5A2E1B] dark:text-[#F3D6E4] hover:bg-[#FF8C69]/10 transition"
        >
          Hire Me <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default AboutCTA;
