// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
const AboutExperience = () => {
    return (
        <section className="py-10 px-6 max-w-4xl mx-auto relative">
        {/* heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#5A2E1B] dark:text-white">
          Experience Timeline
        </h2>

        {/* subtitle */}
        <p className="text-center max-w-2xl mx-auto mb-16 text-sm md:text-base text-[#7A4A33] dark:text-[#E7B7A3]">
          A journey of continuous learning, building, and designing modern
          digital products with real-world impact.
        </p>

        <div className="space-y-10 relative">
          {/* vertical line */}
          <div className="absolute left-4 top-0 w-0.5 h-full bg-[#FF8C69]/30"></div>

          {/* item */}
          {[
            {
              title: "Frontend Developer",
              subtitle: "React & Modern UI Engineering",
              desc: "Developed scalable and high-performance web applications using React, Tailwind CSS, and modern frontend tools. Focused on building clean architecture, reusable components, and smooth user experiences.",
            },
            {
              title: "UI/UX Designer",
              subtitle: "Design Systems & User Experience",
              desc: "Designed intuitive and visually appealing interfaces with strong UX principles. Created design systems, wireframes, and interactive prototypes for modern web products.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              animate={{ x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="pl-12 relative"
            >
              {/* dot */}
              <div className="absolute left-0 top-3 w-4 h-4 bg-[#FF8C69] rounded-full shadow-md"></div>

              {/* card */}
              <div
                className="
          p-6 rounded-2xl
          bg-white/50 dark:bg-[#2A1E1A]
          border border-[#FFB38A]/20
          hover:shadow-lg hover:-translate-y-1
          transition-all duration-300
        "
              >
                {/* title */}
                <h3 className="text-lg font-semibold text-[#5A2E1B] dark:text-white">
                  {item.title}
                </h3>

                {/* subtitle */}
                <p className="text-sm mt-1 text-[#FF8C69] font-medium">
                  {item.subtitle}
                </p>

                {/* description */}
                <p className="text-sm mt-3 leading-relaxed text-[#7A4A33] dark:text-[#E7B7A3]">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    );
};

export default AboutExperience;