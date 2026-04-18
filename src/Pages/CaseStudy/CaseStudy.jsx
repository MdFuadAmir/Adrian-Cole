// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router";
import { caseStudies } from "../../../public/Data/CaseStudies";
import { Helmet } from "react-helmet";

const CaseStudy = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-[#FFF1E6] dark:bg-[#1A1412] py-24 px-6">
      <Helmet>
        <title>Case Studies | Adrian Cole - Design Process & Solutions</title>

        <meta
          name="description"
          content="Detailed case studies by Adrian Cole showcasing design process, problem solving, and UI/UX development workflow."
        />

        <meta
          name="keywords"
          content="UI UX Case Study, Design Process, Web Development Case Study, Portfolio Analysis"
        />

        <meta property="og:title" content="Case Studies | Adrian Cole" />
        <meta
          property="og:description"
          content="Deep dive into real UI/UX and frontend development case studies."
        />
      </Helmet>
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#5A2E1B] dark:text-[#F3D6E4]">
            Case <span className="text-[#FF8C69]">Studies</span>
          </h1>

          <p className="mt-4 text-[#7A4A33] dark:text-[#E7B7A3] max-w-2xl mx-auto">
            Real project breakdowns showing problem solving, design decisions
            and impact.
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* LEFT LIST */}
          <div className="md:col-span-2 space-y-8">
            {caseStudies.map((item, i) => (
              <motion.div
                key={i}
                // initial={{ opacity: 0, x: -40 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.02 }}
                viewport={{ once: true, margin: "-50px" }}
                className="
                  p-6 rounded-2xl
                  bg-white/40 dark:bg-[#2A1E1A]
                  border border-[#FF8C69]/20
                  hover:border-[#FF8C69]/40
                  transition-all duration-300
                  
                "
              >
                {/* TAG */}
                <span className="text-xs text-[#FF8C69] font-medium">
                  {item.tag}
                </span>

                {/* TITLE */}
                <h2 className="text-xl md:text-2xl font-bold mt-2 text-[#5A2E1B] dark:text-[#F3D6E4]">
                  {item.title}
                </h2>

                {/* SUBTITLE */}
                <p className="text-sm text-[#FF8C69] mt-1">{item.subtitle}</p>

                {/* SHORT DESCRIPTION */}
                <p className="mt-3 text-sm text-[#7A4A33] dark:text-[#E7B7A3] leading-relaxed">
                  {item.shortDesc}
                </p>

                {/* CTA */}
                <button
                  onClick={() => navigate(`/case-study/${item.id}`)}
                  className="mt-5 flex items-center gap-2 text-[#FF8C69] hover:gap-3 transition cursor-pointer"
                >
                  Explore Case <FaArrowRight />
                </button>
              </motion.div>
            ))}
          </div>

          {/* RIGHT STICKY INFO */}
          <div className="md:sticky md:top-20 h-fit">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="
                p-6 rounded-2xl
                bg-linear-to-br from-[#FFB38A]/20 to-[#FFD6A5]/10
                border border-[#FF8C69]/20
              "
            >
              <h3 className="text-lg font-semibold text-[#5A2E1B] dark:text-[#F3D6E4]">
                Case Study Insights
              </h3>

              <p className="mt-3 text-sm text-[#7A4A33] dark:text-[#E7B7A3]">
                Each project is designed with user behavior, conversion and
                clarity in mind.
              </p>

              <ul className="mt-5 space-y-3 text-sm text-[#7A4A33] dark:text-[#E7B7A3]">
                <li>✔ Problem-first approach</li>
                <li>✔ UI/UX research based design</li>
                <li>✔ Real business impact focus</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
