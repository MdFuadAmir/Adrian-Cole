// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaReact, FaFigma, FaPaintBrush, FaCode } from "react-icons/fa";

const services = [
  {
    icon: <FaFigma />,
    title: "UI/UX Design",
    subtitle: "User Experience & Interface Strategy",
    desc: "I design modern, clean and user-friendly interfaces with strong UX flow, visual hierarchy and conversion-focused layouts that improve user engagement and satisfaction.",
  },
  {
    icon: <FaReact />,
    title: "Frontend Development",
    subtitle: "React-Based Web Applications",
    desc: "I build fast, responsive and scalable frontend applications using React. My focus is clean component structure, performance optimization and reusable UI systems.",
  },
  {
    icon: <FaPaintBrush />,
    title: "Motion & Interaction Design",
    subtitle: "Smooth Animations & Micro Interactions",
    desc: "I create smooth animations and interactive UI experiences using Framer Motion to make websites feel alive, modern and highly engaging.",
  },
  {
    icon: <FaCode />,
    title: "Full Stack Web Development",
    subtitle: "End-to-End Digital Solutions",
    desc: "I develop complete web solutions with frontend and backend integration, focusing on performance, scalability and modern architecture.",
  },
];

const Services = () => {
  return (
    <section className="py-28 px-6 bg-[#FFF1E6] dark:bg-[#1A1412]">
      <div className="max-w-5xl mx-auto">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#5A2E1B] dark:text-[#F3D6E4]">
            Services I Provide
          </h2>

          <p className="mt-3 text-[#7A4A33] dark:text-[#E7B7A3] max-w-2xl mx-auto">
            I help brands and businesses build modern digital experiences
            through design, development and interactive UI systems.
          </p>
        </motion.div>

        {/* timeline */}
        <div className="relative border-l-2 border-[#FF8C69]/30 pl-8 space-y-12">
          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              {/* dot */}
              <div
                className="
                absolute -left-10.5 top-2
                w-6 h-6 rounded-full
                bg-[#FF8C69]
                flex items-center justify-center
              "
              >
                <span className="text-white text-xs">{i + 1}</span>
              </div>

              {/* content */}
              <div
                className="
                p-6 rounded-2xl
                bg-[#FFE0CC]/30 dark:bg-[#2A1E1A]
                border border-[#FFB38A]/10
                transition-all duration-300
                hover:border-[#FF8C69]/40
                hover:shadow-xl
              "
              >
                {/* icon + title */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-[#FF8C69] text-2xl">{item.icon}</div>

                  <h3 className="text-lg font-semibold text-[#5A2E1B] dark:text-[#F3D6E4]">
                    {item.title}
                  </h3>
                </div>

                {/* subtitle */}
                <p className="text-sm font-medium text-[#FF8C69] mb-2">
                  {item.subtitle}
                </p>

                {/* description */}
                <p className="text-sm text-[#7A4A33] dark:text-[#E7B7A3] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
