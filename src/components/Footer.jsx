import { FaFacebookF, FaInstagram, FaAmbulance, FaYoutube, FaPhoneAlt, FaWhatsapp, FaEnvelope, FaTiktok, FaRegEnvelope } from "react-icons/fa";
import { img } from "../api/data";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600 border-t-2 border-yellow-400">
        {/* CONTENT */}
        <div className="px-6 md:px-20 lg:px-40 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8">
          {/* LOGO & ADDRESS */}
          <div className="border-r border-slate-400">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={img[0]} alt="PKU Muhammadiyah Sruweng" className="w-18 " />
              <div>
                <p className="font-bold text-xl text-white">PKU Muhammadiyah Sruweng</p>
                <p className="font-semibold text-md text-slate-100">Semaikin Unggul dan Islami</p>
              </div>
            </Link>
            <div className="mb-6 ml-14 flex text-slate-100 font-semibold gap-2">
              <FaLocationDot />
              <p className=" leading-relaxed ">
                Jl. Raya Sruweng No 5 Sruweng
                <br />
                Kec. Sruweng Kab. Kebumen, Jawa Tengah,
                <br />
                Indonesia 54416
              </p>
            </div>
            <div className="mb-6 ml-14 flex items-center text-slate-100 font-semibold gap-2">
              <FaRegEnvelope />
              <p className=" leading-relaxed ">pkumuhsruweng@gmail.com</p>
            </div>
            <div className="mb-6 ml-14 flex items-center text-slate-100 font-semibold gap-2">
              <FaPhoneAlt />
              <p className=" leading-relaxed ">0287 – 6601061</p>
            </div>

            <div className="flex gap-3 ml-12">
              <Link to="/" className="w-8 h-8 flex items-center justify-center transition">
                <FaInstagram className="text-2xl text-slate-50 hover:text-pink-700 hover:scale-110 transition-all ease-in-out" />
              </Link>
              <Link to="/" className="w-8 h-8 flex items-center justify-center transition">
                <FaFacebookF className="text-2xl text-slate-50 hover:text-blue-500 hover:scale-110 transition-all " />
              </Link>
              <Link to="/" className="w-8 h-8 flex items-center justify-center transition">
                <FaTiktok className="text-2xl text-slate-50 hover:text-gray-300 hover:scale-110 transition-all " />
              </Link>
              <Link to="/" className="w-8 h-8 flex items-center justify-center transition">
                <FaYoutube className="text-2xl text-slate-50 hover:text-red-700 hover:scale-110 transition-all " />
              </Link>
            </div>
          </div>

          {/* HUBUNGI KAMI */}
          <div>
            <h3 className="font-bold text-xl mb-4 text-slate-50">Hubungi Kami</h3>

            <div className="space-y-3 text-slate-200 underline text-lg">
              <Link to="" className="flex items-center gap-3 text-slate-200 hover:text-white">
                <FaAmbulance className="text-slate-200 text-xl group-hover:text-white" />
                Emergency Call (24 Jam)
              </Link>

              <Link to="" className="flex items-center gap-3 ">
                <FaPhoneAlt className="text-slate-200" />
                Call Center
              </Link>

              <Link to="" className="flex items-center gap-3 ">
                <FaWhatsapp className="text-slate-200" />
                WhatsApp
              </Link>
            </div>
          </div>

          {/* TENTANG KAMI */}
          <div>
            <h3 className="font-bold text-xl mb-4 text-slate-50">Tentang Kami</h3>

            <div className="space-y-3 flex flex-col text-lg text-slate-200  ">
              <Link to="/">Kenapa Kami</Link>
              <Link to="/">Profil Rumah Sakit</Link>
              <Link to="/">Indikator Mutu</Link>
            </div>
          </div>

          {/* JALUR CEPAT */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-slate-50">Hot Line</h3>

            <div className="space-y-3 flex flex-col text-slate-200 ">
              <Link to="/">Berita</Link>
              <Link to="/">Layanan</Link>
              <Link to="/">Kontak Kami</Link>
              <Link to="/">Acara</Link>
              <Link to="/">Karir</Link>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-600 text-slate-900 text-center py-2 text-sm font-semibold">© 2025 Powered by Brindil | All rights reserved.</div>
      </footer>
    </>
  );
};

export default Footer;
