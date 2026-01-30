import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollTopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!show) return null;

  return (
    <button
      onClick={scrollToTop}
      className="
        fixed bottom-20 right-1 lg:right-13
        z-50 border-2 borer-white
        bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-500
        text-white
        p-4
        rounded-full
        shadow-ku cursor-pointer
        hover:scale-104
        transition-all ease-in-out
      "
      aria-label="Scroll to top"
    >
      <FaArrowUp className="lg:text-2xl text-xl" />
    </button>
  );
};

export default ScrollTopButton;
