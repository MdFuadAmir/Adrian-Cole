// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Williams",
    role: "Product Manager",
    text: "Working with Adrian was an exceptional experience. He delivered a modern UI system with perfect attention to detail, smooth animations, and excellent responsiveness across all devices. Our product conversion rate increased significantly after the redesign.",
  },
  {
    name: "Michael Johnson",
    role: "Startup Founder",
    text: "He completely transformed our idea into a professional web application. The UI/UX design quality was outstanding, and the frontend performance was extremely fast. Communication was clear and delivery was always on time.",
  },
  {
    name: "Emily Brown",
    role: "Agency Owner",
    text: "One of the best frontend developers I have worked with. His design sense, React skills, and animation work are top-notch. The final product exceeded expectations and impressed our client completely.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [modal, setModal] = useState(null);

  const next = () => setIndex((p) => (p + 1) % testimonials.length);
  const prev = () =>
    setIndex((p) => (p - 1 + testimonials.length) % testimonials.length);

  const shortText = (text) => {
    return text.length > 140 ? text.slice(0, 140) + "..." : text;
  };

  return (
    <section className="py-24 px-6 bg-[#FFF1E6] dark:bg-[#1A1412]">
      <div className="max-w-4xl mx-auto text-center">
        {/* heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#5A2E1B] dark:text-[#F3D6E4]">
          Client Success Stories
        </h2>

        <p className="mt-3 text-[#7A4A33] dark:text-[#E7E7E7]">
          Real feedback from clients who trusted my design & development work
        </p>

        {/* carousel */}
        <div className="relative mt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4 }}
              className="
                p-8 rounded-2xl text-left
                bg-white/60 dark:bg-[#2A1E1A]
                border border-[#FFB38A]/20
                shadow-md
              "
            >
              <FaQuoteLeft className="text-[#FF8C69] text-2xl mb-4" />

              <p className="text-[#7A4A33] dark:text-[#E7B7E3] leading-relaxed">
                {shortText(testimonials[index].text)}
              </p>

              {/* see more */}
              {testimonials[index].text.length > 140 && (
                <button
                  onClick={() => setModal(testimonials[index])}
                  className="mt-3 text-[#FF8C69] font-medium hover:underline"
                >
                  See more
                </button>
              )}

              {/* user */}
              <div className="mt-6">
                <h4 className="font-semibold text-[#5A2E1B] dark:text-[#F3D6E4]">
                  {testimonials[index].name}
                </h4>
                <p className="text-sm text-[#7A4A33] dark:text-[#E7B7E3]">
                  {testimonials[index].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* controls */}
          <div className="flex justify-center gap-6 mt-8">
            {/* LEFT */}
            <button
              onClick={prev}
              className="
      w-11 h-11
      flex items-center justify-center
      rounded-full
      bg-[#FF8C69]/15
      text-[#FF8C69]
      hover:bg-[#FF8C69]
      hover:text-white
      hover:scale-110
      transition-all duration-300
      shadow-sm hover:shadow-md
    "
            >
              <FaChevronLeft />
            </button>

            {/* RIGHT */}
            <button
              onClick={next}
              className="
      w-11 h-11
      flex items-center justify-center
      rounded-full
      bg-[#FF8C69]/15
      text-[#FF8C69]
      hover:bg-[#FF8C69]
      hover:text-white
      hover:scale-110
      transition-all duration-300
      shadow-sm hover:shadow-md
    "
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed inset-0 bg-black/50
              flex items-center justify-center
              z-50 px-4
            "
            onClick={() => setModal(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="
                max-w-xl w-full p-6 rounded-2xl
                bg-white dark:bg-[#2A1E1A]
              "
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-bold text-[#5A2E1B] dark:text-[#F3D6E4]">
                {modal.name}
              </h3>

              <p className="text-sm text-[#7A4A33] dark:text-[#E7E7E7] mb-4">
                {modal.role}
              </p>

              <p className="text-[#7A4A33] dark:text-[#E7E7E3] leading-relaxed">
                {modal.text}
              </p>

              <button
                onClick={() => setModal(null)}
                className="mt-6 px-4 py-2 rounded-full bg-[#FF8C69] text-white"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Testimonials;
