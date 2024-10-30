"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-4 z-50 bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-400 hover:to-violet-500 shadow-xl w-[50px] h-[50px] rounded-full cursor-pointer flex items-center justify-center border-none"
      aria-label="Retour en haut de la page"
    >
      <FaArrowUp className="text-white" />
    </button>
  );
};
