const filters = ["All", "UI/UX", "React", "Frontend"];

const ProjectsFilter = ({ activeFilter, setActiveFilter }) => {
  return (
    <section className="px-6 mb-10 mt-10">
      <div className="flex flex-wrap justify-center gap-3">
        {filters.map((item, i) => (
          <button
            key={i}
            onClick={() => setActiveFilter(item)}
            className={`
              px-4 py-2 rounded-full text-sm transition
              ${
                activeFilter === item
                  ? "bg-[#FF8C69] text-white"
                  : "bg-[#FF8C69]/15 text-[#5A2E1B] dark:text-[#F3D6E4] hover:bg-[#FF8C69] hover:text-white"
              }
            `}
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
};

export default ProjectsFilter;
