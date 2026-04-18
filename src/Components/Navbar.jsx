// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { HiMenu, HiX } from "react-icons/hi";
import DarkMood from "../Utils/DarkMode";
import Logo from "../Utils/Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Case Study", path: "/case-study" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className="
        fixed w-full z-50 backdrop-blur-2xl
        bg-[#FFF1E6]/80 dark:bg-[#1A1412]/80
        border-b border-[#FFB38A]/20
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <li key={i} className="relative">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `font-medium transition
                  ${
                    isActive
                      ? "text-[#FF8C69] border-b-2 pb-2"
                      : "text-[#7A4A33] dark:text-[#E7B7A3]"
                  }`
                }
              >
                {link.name}
              </NavLink>

              {/* active underline */}
              <span
                className="
                absolute left-0 -bottom-1 h-0.5
                bg-[#FF8C69]
                transition-all duration-300
                w-0
                group-hover:w-full
              "
              />
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <DarkMood />
          {/* Hire Button (desktop only) */}
          <motion.button
            onClick={() => navigate("/contact")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className=" cursor-pointer
              hidden md:block
              px-4 py-2 rounded-full
              bg-[#FF8C69] hover:bg-[#ff7a55]
              text-white text-sm font-medium
              shadow-md shadow-[#FF8C69]/30
            "
          >
            Hire Me
          </motion.button>

          {/* Mobile Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-[#5A2E1B] dark:text-[#F3D6E4]"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            md:hidden flex flex-col gap-6 px-6 py-6 
            bg-[#FFF1E6] dark:bg-[#1A1412]
          "
        >
          {navLinks.map((link, i) => (
            <NavLink
              key={i}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-lg transition w-full text-center
                ${
                  isActive
                    ? "text-[#FF8C69] border-b-2 pb-2"
                    : "text-[#7A4A33] dark:text-[#E7B7A3]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </motion.ul>
      )}
    </nav>
  );
};

export default Navbar;
