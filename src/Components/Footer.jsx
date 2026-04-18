// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import Logo from "../Utils/Logo";
import { Link } from "react-router";
import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

const Footer = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShow(window.scrollY > 300);
    });
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="w-full bg-[#FFF7F2] dark:bg-[#120E0C] pt-20 pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <Logo />

            <p className="text-sm text-[#7A4A33] dark:text-[#E7B7A3] leading-relaxed">
              UI/UX Designer & Frontend Developer focused on building modern,
              scalable and user-friendly digital experiences.
            </p>

            {/* social */}
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="
      p-2 rounded-full
      bg-[#FF8C69]/15
      text-[#5A2E1B] dark:text-[#F3D6E4]
      hover:bg-[#FF8C69] hover:text-white
      transition
    "
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="
      p-2 rounded-full
      bg-[#FF8C69]/15
      text-[#5A2E1B] dark:text-[#F3D6E4]
      hover:bg-[#FF8C69] hover:text-white
      transition
    "
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                className="
      p-2 rounded-full
      bg-[#FF8C69]/15
      text-[#5A2E1B] dark:text-[#F3D6E4]
      hover:bg-[#FF8C69] hover:text-white
      transition
    "
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="
      p-2 rounded-full
      bg-[#FF8C69]/15
      text-[#5A2E1B] dark:text-[#F3D6E4]
      hover:bg-[#FF8C69] hover:text-white
      transition
    "
              >
                <FaEnvelope />
              </a>
            </div>
          </motion.div>

          {/* quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-[#5A2E1B] dark:text-[#F3D6E4] mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-[#7A4A33] dark:text-[#E7B7A3]">
              <li className="hover:text-[#FF8C69] cursor-pointer">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="hover:text-[#FF8C69] cursor-pointer">
                <Link to={"/projects"}>Projects</Link>
              </li>
              <li className="hover:text-[#FF8C69] cursor-pointer">
                <Link to={"/about"}>About</Link>
              </li>
              <li className="hover:text-[#FF8C69] cursor-pointer">
                <Link to={"/case-study"}>Case Study</Link>
              </li>

              <li className="hover:text-[#FF8C69] cursor-pointer">
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-[#5A2E1B] dark:text-[#F3D6E4]">
              Let’s Work Together
            </h3>

            <p className="text-sm text-[#7A4A33] dark:text-[#E7B7A3]">
              Have a project in mind? Let’s build something amazing together.
            </p>

            <Link
              to={"/contact"}
              className="
              px-5 py-3 rounded-full
              bg-[#FF8C69] text-white
              hover:bg-[#ff7a55]
              transition
            "
            >
              Hire Me
            </Link>
          </motion.div>
        </div>

        {/* bottom bar */}
        <div className="mt-16 border-t border-[#FF8C69]/20 pt-6 text-center text-sm text-[#7A4A33] dark:text-[#E7B7A3]">
          © {new Date().getFullYear()} Md Fuad Amir. All rights reserved.
        </div>
      </div>
      {/* scroll to top */}
      {show && (
        <button
          onClick={scrollToTop}
          className="
    fixed bottom-6 right-6
    w-12 h-12
    flex items-center justify-center
    rounded-full
    bg-[#FF8C69]
    text-white
    shadow-lg shadow-[#FF8C69]/40
    hover:bg-[#ff7a55]
    hover:scale-110
    transition-all duration-300
    z-50
  "
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;
