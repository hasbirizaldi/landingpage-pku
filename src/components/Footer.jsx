import { FaFacebookF, FaInstagram, FaAmbulance, FaYoutube, FaPhoneAlt, FaWhatsapp, FaTiktok, FaRegEnvelope } from "react-icons/fa";
import { img } from "../api/data";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer data-aos="fade-up" className="bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600 border-t-2 border-yellow-500">
      {/* CONTENT */}
      <div className="px-4 sm:px-10 md:px-20 lg:px-10 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10">
        {/* LOGO & ADDRESS */}
        <div className="lg:border-r border-slate-300 pr-0 lg:pr-1">
          <Link to="/" className="flex items-center gap-2 mb-2">
            <img src={img[0]} alt="PKU Muhammadiyah Sruweng" className="w-14 sm:w-16" />
            <div className="-space-y-1">
              <div className="-space-y-2">
                <p className="font-bold text-lg sm:text-lg text-white">RS PKU Muhammadiyah </p>
                <p className="font-bold text-lg sm:text-lg text-white">Sruweng</p>
              </div>
              <p className="font-semibold text-sm sm:text-md text-yellow-500 el-messiri">Semakin Unggul dan Islami</p>
            </div>
          </Link>

          <div className="sm:space-y-2 space-y-4 sm:ml-14 text-slate-100 font-semibold">
            <div className="flex gap-2">
              <FaLocationDot className="mt-1" />
              <p className="leading-relaxed text-sm sm:text-sm font-normal">
                Jl. Raya Sruweng No 5 Sruweng <br />
                Kec. Sruweng Kab. Kebumen, Jawa Tengah <br />
                54362
              </p>
            </div>

            <div className="flex items-center gap-2 ">
              <FaRegEnvelope />
              <p className="text-sm font-normal">pkumuhsruweng@gmail.com</p>
            </div>

            <div className="flex items-center gap-2">
              <FaPhoneAlt />
              <p className="text-sm font-normal">(0287)382597/550667</p>
            </div>
          </div>

          {/* SOSMED */}
          <div className="flex gap-4 mt-4 sm:ml-14">
            <Link to="https://www.instagram.com/rspkumuhammadiyahsruweng/" target="_blank">
              <FaInstagram className="text-xl sm:text-lg text-slate-50 hover:text-pink-600 hover:scale-110 transition" />
            </Link>
            <Link to="https://web.facebook.com/pkusruweng" target="_blank">
              <FaFacebookF className="text-xl sm:text-lg text-slate-50 hover:text-blue-500 hover:scale-110 transition" />
            </Link>
            <Link to="https://www.tiktok.com/@rspkumuhammadiyahsruweng" target="_blank">
              <FaTiktok className="text-xl sm:text-lg text-slate-50 hover:text-gray-800 hover:scale-110 transition" />
            </Link>
            <Link to="https://www.youtube.com/@pkusruweng9292" target="_blank">
              <FaYoutube className="text-xl sm:text-lg text-slate-50 hover:text-red-600 hover:scale-110 transition" />
            </Link>
          </div>
        </div>

        {/* HUBUNGI KAMI */}
        <div>
          <h3 className="font-bold text-base sm:text-base mb-4 text-slate-50">Hubungi Kami</h3>

          <div className="space-y-3 text-slate-200 text-sm sm:text-sm">
            <Link to="https://wa.me/6287764936777?text=Assalamualaikum%20RS%20PKU%20Sruweng" target="_blank" className="flex items-center gap-3 hover:text-white">
              <FaAmbulance className="text-xl sm:text-lg" /> Ambulance
            </Link>

            <Link to="/" target="_blank" className="flex items-center gap-3 hover:text-white">
              <FaPhoneAlt className="text-xl sm:text-lg" /> Call Center
            </Link>

            <Link to="https://wa.me/6287877505050?text=Assalamualaikum%20RS%20PKU%20Sruweng%2C%20saya%20ingin%20bertanya" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white">
              <FaWhatsapp className="text-xl sm:text-lg" /> WhatsApp
            </Link>
          </div>
        </div>

        {/* TENTANG KAMI */}
        <div>
          <h3 className="font-bold text-lg sm:text-base mb-4 text-slate-50">Profil Kami</h3>

          <div className="space-y-3 flex flex-col text-sm sm:text-sm text-slate-200">
            <Link to="/sejarah" className="hover:text-white">
              Sejarah
            </Link>
            <Link to="/indikator-mutu" className="hover:text-white">
              Indikator Mutu
            </Link>
            <Link to="/struktur-organisasi" className="hover:text-white">
              Struktur Organisasi
            </Link>
          </div>
        </div>

        {/* HOT LINE */}
        <div>
          <h3 className="font-bold text-lg sm:text-base mb-4 text-slate-50">Hot Line</h3>

          <div className="space-y-3 flex flex-col text-sm sm:text-base text-slate-200">
            <Link to="/artikel-baru" className="hover:text-white">
              Artikel
            </Link>
            <Link to="/jadwal-dokter" className="hover:text-white">
              Jadwal Poliklinik
            </Link>
            <Link to="/dokter-kami" className="hover:text-white">
              Dokter Kami
            </Link>
            <Link to="/karir" className="hover:text-white">
              Karier
            </Link>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="bg-transparent text-center py-1 text-[10px] sm:text-xs font-normal text-white">© 2025 Powered by Brindil | All Rights Reserved.</div>
    </footer>
  );
};

export default Footer;
