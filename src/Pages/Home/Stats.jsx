// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const statsData = [
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 30, suffix: "+", label: "Projects Completed" },
  { value: 20, suffix: "+", label: "Happy Clients" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

const AnimatedNumber = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 4000;
    const step = value / (duration / 16);

    const interval = setInterval(() => {
      start += step;

      if (start >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(interval);
  }, [value]);

  return <span>{count}</span>;
};

const Stats = () => {
  return (
    <section className="py-20 md:py-44 px-6 bg-[#FFF1E6] dark:bg-[#1A1412]">
      <div className="max-w-6xl mx-auto">

        {/* heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#5A2E1B] dark:text-[#F3D6E4]">
            My Impact in Numbers
          </h2>
          <p className="mt-3 text-sm md:text-base text-[#7A4A33] dark:text-[#E7B7A3]">
            Real results from real projects
          </p>
        </div>

        {/* grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {statsData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              // viewport={{ once: false }}
                viewport={{
                amount: 0.5,
                once: false,
              }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="
                p-6 text-center rounded-2xl
                bg-[#FFE0CC]/40 dark:bg-[#2A1E1A]
                border border-[#FFB38A]/20
                shadow-sm
              "
            >
              {/* number */}
              <h3 className="text-3xl md:text-4xl font-bold text-[#FF8C69]">
                <AnimatedNumber value={item.value} />
                {item.suffix}
              </h3>

              {/* label */}
              <p className="mt-2 text-sm md:text-base text-[#7A4A33] dark:text-[#E7B7A3]">
                {item.label}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};


export default Stats;

