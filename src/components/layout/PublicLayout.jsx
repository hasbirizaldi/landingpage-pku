
import { Link, Outlet } from "react-router-dom";
import HeaderNavbar from "../HeaderNavbar";
import MenuBottom from "../home/MenuBottom";
import ScrollToTop from "../ScrollToTop";
import ScrollTopButton from "../ScrollToTopButton";
import Footer from "../Footer";
import { FaWhatsappSquare } from "react-icons/fa";

const PublicLayout = () => {
  return (
    <div className="relative poppins">
      <HeaderNavbar />
      <MenuBottom />
      <ScrollToTop />
      <ScrollTopButton />

      <Outlet />
      <Link
        to="https://wa.me/6287877505050?text=Assalamualaikum%20RS%20PKU%20Sruweng%2C%20saya%20ingin%20bertanya"
        target="_blank"
        className="fixed lg:bottom-40 bottom-38 lg:right-13 right-1 z-60 bg-white cursor-pointer hover:scale-105 transition-all ease-in-out rounded-lg shadow-icon"
      >
        <FaWhatsappSquare className="text-emerald-700 lg:text-6xl text-5xl" />
      </Link>
      <Footer />
    </div>
  );
};

export default PublicLayout;
