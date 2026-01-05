import { FaFacebookF, FaInstagram, FaAmbulance, FaYoutube, FaPhoneAlt, FaWhatsapp, FaTiktok, FaRegEnvelope } from "react-icons/fa";
import { img } from "../api/data";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-emerald-800 via-emerald-600 to-emerald-800 border-t-2 border-yellow-400">
      {/* CONTENT */}
      <div className="px-4 sm:px-10 md:px-20 lg:px-20 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10">
        {/* LOGO & ADDRESS */}
        <div className="lg:border-r border-slate-400 pr-0 lg:pr-1">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <img src={img[0]} alt="PKU Muhammadiyah Sruweng" className="w-14 sm:w-16" />
            <div>
              <p className="font-bold text-lg sm:text-xl text-white">PKU Muhammadiyah Sruweng</p>
              <p className="font-semibold text-sm sm:text-md text-yellow-300">Semakin Unggul dan Islami</p>
            </div>
          </Link>

          <div className="space-y-4 sm:ml-14 text-slate-100 font-semibold">
            <div className="flex gap-2">
              <FaLocationDot className="mt-1" />
              <p className="leading-relaxed text-sm sm:text-base font-normal">
                Jl. Raya Sruweng No 5 Sruweng <br />
                Kec. Sruweng Kab. Kebumen, Jawa Tengah <br />
                Indonesia 54416
              </p>
            </div>

            <div className="flex items-center gap-2 ">
              <FaRegEnvelope />
              <p className="text-sm sm:text-base font-normal">pkumuhsruweng@gmail.com</p>
            </div>

            <div className="flex items-center gap-2">
              <FaPhoneAlt />
              <p className="text-sm sm:text-base font-normal">0287 – 6601061</p>
            </div>
          </div>

          {/* SOSMED */}
          <div className="flex gap-4 mt-6 sm:ml-12">
            <Link to="https://www.instagram.com/rspkumuhammadiyahsruweng/" target="_blank">
              <FaInstagram className="text-xl sm:text-xl text-slate-50 hover:text-pink-600 hover:scale-110 transition" />
            </Link>
            <Link to="https://web.facebook.com/pkusruweng" target="_blank">
              <FaFacebookF className="text-xl sm:text-xl text-slate-50 hover:text-blue-500 hover:scale-110 transition" />
            </Link>
            <Link to="https://www.tiktok.com/@rspkumuhammadiyahsruweng" target="_blank">
              <FaTiktok className="text-xl sm:text-xl text-slate-50 hover:text-gray-300 hover:scale-110 transition" />
            </Link>
            <Link to="https://www.youtube.com/@pkusruweng9292" target="_blank">
              <FaYoutube className="text-xl sm:text-xl text-slate-50 hover:text-red-600 hover:scale-110 transition" />
            </Link>
          </div>
        </div>

        {/* HUBUNGI KAMI */}
        <div>
          <h3 className="font-bold text-lg sm:text-xl mb-4 text-slate-50">Hubungi Kami</h3>

          <div className="space-y-3 text-slate-200 text-sm sm:text-base">
            <Link to="https://wa.me/6287764936777?text=Assalamualaikum%20RS%20PKU%20Sruweng" target="_blank" className="flex items-center gap-3 hover:text-white">
              <FaAmbulance className="text-xl sm:text-xl" /> Ambulance
            </Link>

            <Link to="/" target="_blank" className="flex items-center gap-3 hover:text-white">
              <FaPhoneAlt className="text-xl sm:text-xl" /> Call Center
            </Link>

            <Link to="https://wa.me/6287877505050?text=Assalamualaikum%20RS%20PKU%20Sruweng%2C%20saya%20ingin%20bertanya" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white">
              <FaWhatsapp className="text-xl sm:text-xl" /> WhatsApp
            </Link>
          </div>
        </div>

        {/* TENTANG KAMI */}
        <div>
          <h3 className="font-bold text-lg sm:text-xl mb-4 text-slate-50">Tentang Kami</h3>

          <div className="space-y-3 flex flex-col text-sm sm:text-base text-slate-200">
            <Link to="/" className="hover:text-white">
              Kenapa Kami
            </Link>
            <Link to="/" className="hover:text-white">
              Profil Rumah Sakit
            </Link>
            <Link to="/indikator-mutu" className="hover:text-white">
              Indikator Mutu
            </Link>
          </div>
        </div>

        {/* HOT LINE */}
        <div>
          <h3 className="font-bold text-lg sm:text-xl mb-4 text-slate-50">Hot Line</h3>

          <div className="space-y-3 flex flex-col text-sm sm:text-base text-slate-200">
            <Link to="/berita" className="hover:text-white">
              Berita
            </Link>
            <Link to="/" className="hover:text-white">
              Layanan
            </Link>
            <Link to="/" className="hover:text-white">
              Kontak Kami
            </Link>
            <Link to="/" className="hover:text-white">
              Acara
            </Link>
            <Link to="/karir" className="hover:text-white">
              Karir
            </Link>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-600 text-slate-900 text-center py-1 text-[10px] sm:text-xs font-semibold">© 2025 Powered by Brindil | All rights reserved.</div>
    </footer>
  );
};

export default Footer;
