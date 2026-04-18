import { useParams, useNavigate } from "react-router";
import { caseStudies } from "../../../public/Data/CaseStudies";
import { FaArrowLeft } from "react-icons/fa";

const CaseStudyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const caseItem = caseStudies.find((c) => c.id === id);

  if (!caseItem) {
    return <div className="p-10 text-center">Not found</div>;
  }

  return (
    <section className="bg-[#FFF1E6] dark:bg-[#1A1412] md:min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* back */}
        <button
          onClick={() => navigate(-1)}
          className="mb-4 flex items-center gap-2 dark:text-gray-200"
        >
          <FaArrowLeft /> Back
        </button>

        {/* title */}
        <h1 className="text-4xl font-bold text-[#5A2E1B] dark:text-[#eee2dd]">
          {caseItem.title}
        </h1>

        <p className="text-[#FF8C69]  mt-2">{caseItem.subtitle}</p>

        {/* overview */}
        <p className="mt-6 text-[#7A4A33] dark:text-[#E7B7A3]">
          {caseItem.overview}
        </p>

        {/* sections */}
        <div className="mt-10 space-y-6">
          <div className="p-6 rounded-xl bg-white/60 dark:bg-[#2A1E1A]">
            <h3 className="text-red-500 font-semibold">Problem</h3>
            <p className="dark:text-[#E7B7A3]">{caseItem.problem}</p>
          </div>

          <div className="p-6 rounded-xl bg-white/60 dark:bg-[#2A1E1A]">
            <h3 className="text-blue-500 font-semibold">Research</h3>
            <p className="dark:text-[#E7B7A3]">{caseItem.research}</p>
          </div>

          <div className="p-6 rounded-xl bg-white/60 dark:bg-[#2A1E1A]">
            <h3 className="text-green-500 font-semibold">Solution</h3>
            <p className="dark:text-[#E7B7A3]">{caseItem.solution}</p>
          </div>

          <div className="p-6 rounded-xl bg-white/60 dark:bg-[#2A1E1A]">
            <h3 className="text-yellow-500 font-semibold">Result</h3>
            <p className="dark:text-[#E7B7A3]">{caseItem.result}</p>
          </div>
        </div>

        {/* features */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold dark:text-white mb-4">
            Features
          </h2>

          <ul className="grid md:grid-cols-2 gap-3">
            {caseItem.features.map((f, i) => (
              <li
                key={i}
                className="p-3 rounded-lg bg-white/60 dark:bg-[#2A1E1A] dark:text-[#E7B7A3]"
              >
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* tech */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold dark:text-white mb-4">
            Tech Stack
          </h2>

          <div className="flex flex-wrap gap-3">
            {caseItem.techStack.map((t, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-[#FF8C69] text-white rounded-full text-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* conclusion */}
        <div className="mt-10 p-6 rounded-xl bg-white/60 dark:bg-[#2A1E1A]">
          <h3 className="font-semibold dark:text-white mb-2">Conclusion</h3>
          <p className="dark:text-[#E7B7A3]">{caseItem.conclusion}</p>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyDetails;
