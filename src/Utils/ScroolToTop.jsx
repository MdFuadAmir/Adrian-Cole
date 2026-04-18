import React, { useEffect } from 'react';

const ScroolToTop = () => {
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
    return scrollToTop;
};

export default ScroolToTop;

