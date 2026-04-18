// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router";

const Logo = () => {
  useEffect(() => {
      window.addEventListener("scroll", () => {
        (window.scrollY > 300);
      });
    }, []);
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  return (
    <Link to="/" onClick={scrollToTop}>
      <motion.h1
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="
          cursor-pointer select-none
          text-xl font-bold 
          text-[#5A2E1B] dark:text-[#F3D6E4]
          transition
        "
      >
        Adrian Cole
      </motion.h1>
    </Link>
  );
};

export default Logo;