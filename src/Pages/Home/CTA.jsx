// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaArrowRight,
  FaRocket,
  FaPalette,
  FaBolt,
  FaBullseye,
} from "react-icons/fa";
import { Link } from "react-router";

const features = [
  {
    icon: FaBolt,
    text: "Fast Delivery",
  },
  {
    icon: FaBullseye,
    text: "Clean UI System",
  },
  {
    icon: FaRocket,
    text: "Production Ready Code",
  },
];

const CtaFeatureCard = () => {
  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
      {features.map((item, i) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -6, scale: 1.03 }}
            className="
              p-4 rounded-xl
              bg-white/40 dark:bg-[#2A1E1A]
              text-[#5A2E1B] dark:text-[#E7B7A3]
              border border-transparent
              hover:border-[#FF8C69]/40
              hover:bg-[#FF8C69]/10
              transition-all duration-300
              cursor-pointer
            "
          >
            <div className="flex items-center gap-2 font-medium">
              <Icon className="text-lg text-[#FF8C69]" /> {/* ✅ FIXED */}
              <span>{item.text}</span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
const CTA = () => {
  return (
    <section className="w-full py-28 bg-[#FFF1E6] dark:bg-[#1A1412]">
      <div className=" mx-auto">
        {/* main card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            relative overflow-hidden
            w-full
            rounded-4xl
            p-10 md:p-16
            bg-linear-to-r from-[#FFB38A]/25 via-[#FFD6A5]/20 to-[#FF8C69]/25
            border border-[#FF8C69]/30
          "
        >
          {/* floating decorations */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute top-10 left-10 text-[#FF8C69]/60 text-2xl"
          >
            <FaPalette />
          </motion.div>

          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute bottom-10 right-10 text-[#C46A3C]/60 text-2xl"
          >
            <FaBolt />
          </motion.div>

          {/* content */}
          <div className="text-center max-w-3xl mx-auto">
            {/* badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="
                inline-flex items-center gap-2
                px-4 py-1 mb-6
                rounded-full
                bg-[#FF8C69]/15
                text-[#693f2d] dark:text-[#debfb2]
                text-sm
              "
            >
              <FaRocket />
              Let’s Build Something Amazing
            </motion.div>

            {/* title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="
                text-3xl md:text-5xl font-bold
                text-[#5A2E1B] dark:text-[#F3D6E4]
                leading-tight
              "
            >
              Ready to turn your idea into a
              <span className="text-[#FF8C69]"> real product?</span>
            </motion.h2>

            {/* description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="
                mt-6 text-sm md:text-lg
                text-[#7A4A33] dark:text-[#E7B7A3]
                leading-relaxed
              "
            >
              I design and build modern, scalable, and user-friendly digital
              experiences. From UI/UX design to full React development — I can
              help you ship fast and clean products.
            </motion.p>

            {/* extra points */}
            <CtaFeatureCard />

            {/* buttons */}
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link
             to={'/contact'}
                className="
                flex items-center justify-center gap-2
                px-6 py-3 rounded-full
                bg-[#FF8C69] text-white
                hover:bg-[#ff7a55]
                hover:scale-105
                transition-all duration-300
                shadow-md
              "
              >
                <FaEnvelope />
                Hire Me
              </Link>

              <Link to={'/projects'}
                className="
                flex items-center justify-center gap-2
                px-6 py-3 rounded-full
                border border-[#FF8C69]/40
                text-[#5A2E1B] dark:text-[#F3D6E4]
                hover:bg-[#FF8C69]/10
                hover:scale-105
                transition-all duration-300
              "
              >
                View Portfolio
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
