// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaSearch, FaPenNib, FaCode, FaRocket } from "react-icons/fa";

const steps = [
  {
    icon: <FaSearch />,
    title: "Research",
    desc: "Understand user needs, market trends and project goals.",
  },
  {
    icon: <FaPenNib />,
    title: "Design",
    desc: "Create modern UI with clean structure and smooth experience.",
  },
  {
    icon: <FaCode />,
    title: "Development",
    desc: "Build responsive and scalable React applications.",
  },
  {
    icon: <FaRocket />,
    title: "Launch",
    desc: "Optimize, test and deploy production-ready projects.",
  },
];

const Process = () => {
  return (
    <section className="py-20 md:py-44 px-6 bg-[#FFF1E6] dark:bg-[#1A1412]">
      <div className="max-w-6xl mx-auto">

        {/* heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5A2E1B] dark:text-[#F3D6E4]">
            Process
          </h2>
          <p className="mt-3 text-[#7A4A33] dark:text-[#E7B7A3]">
            A simple workflow that turns ideas into reality
          </p>
        </div>

        {/* steps wrapper */}
        <div className="relative">

          {/* connecting line (desktop only) */}
          <div className="
            hidden md:block absolute top-10 left-0 w-full h-0.5
            bg-[#FFB38A]/30
          "></div>

          {/* mobile vertical line */}
          <div className="
            md:hidden absolute left-6 top-0 w-0.5 h-full
            bg-[#FFB38A]/30
          "></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className="
                  relative pl-14 md:pl-0 text-left md:text-center
                "
              >

                {/* icon circle */}
                <div className="
                  absolute md:static left-0 top-0
                  w-12 h-12 md:w-14 md:h-14
                  flex items-center justify-center
                  rounded-full
                  bg-[#FF8C69]/20 text-[#FF8C69]
                  text-lg md:text-xl
                  mx-auto
                ">
                  {step.icon}
                </div>

                {/* content */}
                <h3 className="
                  mt-0 md:mt-4 text-lg font-semibold
                  text-[#5A2E1B] dark:text-[#F3D6E4]
                ">
                  {step.title}
                </h3>

                <p className="
                  mt-2 text-sm md:text-base
                  text-[#7A4A33] dark:text-[#E7B7E3]
                  leading-relaxed
                ">
                  {step.desc}
                </p>

                {/* step number */}
                <span className="
                  hidden md:block absolute top-0 right-0
                  text-xs font-bold text-[#FF8C69]/60
                ">
                  0{i + 1}
                </span>

              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Process;