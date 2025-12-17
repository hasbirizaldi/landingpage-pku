import { FaAmbulance, FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";
import { img } from "../api/data";
import { useState, useEffect } from "react";

const HeaderNavbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const closeAll = () => {
    setOpenMenu(false);
    setOpenDropdown(null);
  };

  // ===== SCROLL DETECTOR =====
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`
    sticky top-0 lg:fixed lg:top-0 lg:left-0
    w-full z-50
    bg-white
    lg:h-20 h-16
    lg:px-30 px-2
    flex items-center
    transition-all duration-300 lg:border-none border-b-2 border-green-700
    ${scrolled ? "lg:-translate-y-full lg:opacity-0" : ""}
  `}
      >
        <div className="flex justify-between items-center w-full">
          {/* LOGO */}
          <Link to="/" className="flex gap-16 items-center">
            <div className="flex lg:gap-2 gap-1">
              <img src={img[0]} alt="logo" className="max-w-14 lg:max-w-18 lg:max-h-16" />
              <div className="flex flex-col justify-center">
                <h1 className="font-bold leading-5 text-green-800 text-sm lg:text-lg">RS PKU MUHAMMADIYAH</h1>
                <h1 className="font-bold leading-5 text-green-800 text-sm lg:text-lg">SRUWENG</h1>
              </div>
            </div>
            <img src={img[1]} alt="logo" className="w-12 lg:w-30 hidden lg:flex" />
          </Link>

          {/* SOSMED DESKTOP */}
          <div className="lg:flex hidden items-center justify-between">
            <div className="flex gap-3">
              <Link to="https://wa.me/6287764936777?text=Assalamualaikum%20Ambulance%20RS%20PKU%20Sruweng" target="_blank" className="flex gap-2 items-center font-bold text-sm ">
                <div className="border-2 border-red-600 p-1 rounded-full shadow-icon">
                  <FaAmbulance className="text-red-600 text-xl" />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold leading-4 text-red-600 text-sm ">Ambulance</span>
                  <span className="text-red-600">0877 6493 6777</span>
                </div>
              </Link>
              <Link to="https://wa.me/6287877505050?text=Assalamualaikum%20RS%20PKU%20Sruweng%2C%20saya%20ingin%20bertanya" target="_blank" className="flex gap-2 items-center font-bold text-sm">
                <div className="border-2 border-green-700 p-1 rounded-full  shadow-icon">
                  <img src={img[6]} alt="Call-center" className="h-5 w-5" />
                </div>
                <p className="flex flex-col">
                  <span className="font-semibold leading-4 text-green-700">Care Center</span>
                  <span className="text-green-700">0287-6601061</span>
                </p>
              </Link>
            </div>
            <div>
              <div className="flex gap-1 ml-12">
                <Link to="https://www.instagram.com/rspkumuhammadiyahsruweng/" target="_blank" className="w-8 h-8 flex items-center justify-center transition">
                  <FaInstagram
                    className="text-lg text-slate-700
                   hover:text-pink-700 hover:scale-110 transition-all ease-in-out"
                  />
                </Link>
                <Link to="https://web.facebook.com/pkusruweng" target="_blank" className="w-8 h-8 flex items-center justify-center transition">
                  <FaFacebookF
                    className="text-lg text-slate-700
                   hover:text-blue-600
                  0 hover:scale-110 transition-all "
                  />
                </Link>
                <Link to="https://www.tiktok.com/@rspkumuhammadiyahsruweng" target="_blank" className="w-8 h-8 flex items-center justify-center transition">
                  <FaTiktok
                    className="text-lg text-slate-700
                   hover:text-gray-700 hover:scale-110 transition-all "
                  />
                </Link>
                <Link to="https://www.youtube.com/@pkusruweng9292" target="_blank" className="w-8 h-8 flex items-center justify-center transition">
                  <FaYoutube
                    className="text-lg text-slate-700
                   hover:text-red-600 hover:scale-110 transition-all "
                  />
                </Link>
              </div>
            </div>
          </div>
          {/* HAMBURGER */}
          <div className="lg:hidden cursor-pointer" onClick={() => setOpenMenu(!openMenu)}>
            {openMenu ? <IoMdCloseCircle className="text-4xl text-green-900" /> : <TiThMenu className="text-4xl text-green-900 border-3 border-green-900 rounded" />}
          </div>
        </div>
      </header>

      {/* ================= NAV DESKTOP ================= */}
      <nav
        className={`
          bg-green-900 z-40 h-14
          transition-all duration-300
          hidden lg:block shadow-ku
          ${scrolled ? "fixed top-0 w-full " : "relative mt-20"}
        `}
      >
        <div className="bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-600 max-w-[80%] mx-auto rounded-b-full">
          <ul className="flex justify-center text-white text-sm font-bold h-13">
            <li className="px-3 py-4">
              <Link to="/">BERANDA</Link>
            </li>
            <li className="px-3 py-4">
              <Link to="/jadwal-dokter">JADWAL DOKTER</Link>
            </li>

            {/* TENTANG */}
            <li className="relative group px-3 py-4 cursor-pointer">
              <div className="flex items-center">
                TENTANG KAMI <MdKeyboardArrowDown />
              </div>
              <div className="absolute font-normal left-0 top-full bg-white text-black w-56 rounded shadow opacity-0 invisible group-hover:visible group-hover:opacity-100 transition">
                <Link className="block px-4 py-2 hover:bg-gray-100" to="/sejarah">
                  Sejarah
                </Link>
                <Link className="block px-4 py-2 hover:bg-gray-100" to="/falsafah-visi-misi">
                  Falsafah Visi & Misi
                </Link>
                <Link className="block px-4 py-2 hover:bg-gray-100" to="/akreditasi-penghargaan">
                  Akreditasi & Penghargaan
                </Link>
                <Link className="block px-4 py-2 hover:bg-gray-100" to="/indikator-mutu">
                  Indikator Mutu
                </Link>
                <Link className="block px-4 py-2 hover:bg-gray-100" to="/struktur-organisasi">
                  Struktur Organisasi
                </Link>
              </div>
            </li>
            {/* PELAYANAN */}
            <li className="relative group px-3 py-4 cursor-pointer">
              <div className="flex items-center">
                PELAYANAN <MdKeyboardArrowDown />
              </div>
              <div className="absolute font-normal left-0 top-full bg-white text-black w-56 rounded shadow opacity-0 invisible group-hover:visible group-hover:opacity-100 transition">
                <Link className="block px-4 py-2 hover:bg-gray-100" to="/rawat-jalan">
                  Pelayanan Rawat Jalan
                </Link>
                <Link className="block px-4 py-2 hover:bg-gray-100" to="/rawat-inap">
                  Pelayanan Rawat Inap
                </Link>
                <Link className="block px-4 py-2 hover:bg-gray-100" to="/penunjang">
                  Pelayanan Penunjang
                </Link>
                <Link className="block px-4 py-2 hover:bg-gray-100" to="/igd">
                  IGD 24 Jam
                </Link>
                <Link className="block px-4 py-2 hover:bg-gray-100" to="/dokter-kami">
                  Dokter Kami
                </Link>
                <Link className="block px-4 py-2 hover:bg-gray-100" to="/bed-pasien">
                  Bed Pasien
                </Link>
                <Link className="block px-4 py-2 hover:bg-gray-100" to="/go-obat">
                  Go Obat
                </Link>
              </div>
            </li>
            {/* BERITA ARTIKEL */}
            <li className="relative group px-3 py-4 cursor-pointer">
              <div className="flex items-center">
                BERITA & ARTIKEL <MdKeyboardArrowDown />
              </div>
              <div className="absolute font-normal left-0 top-full bg-white text-black w-56 rounded shadow opacity-0 invisible group-hover:visible group-hover:opacity-100 transition">
                <Link className="block px-4 py-2 hover:bg-gray-100" to="/berita">
                  Berita
                </Link>
                <Link className="block px-4 py-2 hover:bg-gray-100" to="/artikel-islami">
                  Artikel Islami
                </Link>
                <Link className="block px-4 py-2 hover:bg-gray-100" to="/artikel-kesehatan">
                  Artikel Kesehatan
                </Link>
                <Link className="block px-4 py-2 hover:bg-gray-100" to="/promosi-leaflet">
                  Promosi & Leaflet
                </Link>
                <Link className="block px-4 py-2 hover:bg-gray-100" to="/gallery">
                  Gallery
                </Link>
              </div>
            </li>
            {/* VIDIO TUTORIAL */}
            <li className="relative group px-3 py-4 cursor-pointer">
              <div className="flex items-center">
                VIDIO & TUTORIAL <MdKeyboardArrowDown />
              </div>
              <div className="absolute font-normal left-0 top-full bg-white text-black w-56 rounded shadow opacity-0 invisible group-hover:visible group-hover:opacity-100 transition">
                <Link className="block px-4 py-2 hover:bg-gray-100" to="/keislaman">
                  Keislaman
                </Link>
                <Link className="block px-4 py-2 hover:bg-gray-100" to="/kesehatan">
                  Kesehatan
                </Link>
                <Link className="block px-4 py-2 hover:bg-gray-100" to="/simrs">
                  SIMRS
                </Link>
              </div>
            </li>

            <li className="px-3 py-4">
              <Link to="/karir">KARIR</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* ===== SPACER (WAJIB, BIAR GA LOMPAT) ===== */}
      <div className={`${scrolled ? "lg:h-12" : "lg:h-0"}`} />

      {/* ================= NAV MOBILE ================= */}
      <div
        className={`
    lg:hidden fixed top-14 left-0 w-full 
    bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-900 
    text-white z-40
    transition-all duration-300
    ${openMenu ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"}
  `}
      >
        <ul className="flex flex-col text-sm font-semibold">
          {/* BERANDA */}
          <li className="px-4 py-3 border-b">
            <Link to="/" onClick={closeAll}>
              BERANDA
            </Link>
          </li>

          {/* JADWAL */}
          <li className="px-4 py-3 border-b">
            <Link to="/jadwal-dokter" onClick={closeAll}>
              JADWAL DOKTER
            </Link>
          </li>

          {/* TENTANG KAMI */}
          <li className="border-b">
            <button onClick={() => toggleDropdown("tentang")} className="w-full px-4 py-3 flex justify-between items-center">
              TENTANG KAMI
              <MdKeyboardArrowDown className={`transition ${openDropdown === "tentang" ? "rotate-180" : ""}`} />
            </button>
            {openDropdown === "tentang" && (
              <ul className="bg-emerald-800 text-sm">
                <li className="px-6 py-2">
                  <Link to="/sejarah" onClick={closeAll}>
                    Sejarah
                  </Link>
                </li>
                <li className="px-6 py-2">
                  <Link to="/falsafah-visi-misi" onClick={closeAll}>
                    Visi & Misi
                  </Link>
                </li>
                <li className="px-6 py-2">
                  <Link to="/akreditasi-penghargaan" onClick={closeAll}>
                    Akreditasi
                  </Link>
                </li>
                <li className="px-6 py-2">
                  <Link to="/indikator-mutu" onClick={closeAll}>
                    Indikator Mutu
                  </Link>
                </li>
                <li className="px-6 py-2">
                  <Link to="/struktur-organisasi" onClick={closeAll}>
                    Struktur
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* PELAYANAN */}
          <li className="border-b">
            <button onClick={() => toggleDropdown("pelayanan")} className="w-full px-4 py-3 flex justify-between items-center">
              PELAYANAN
              <MdKeyboardArrowDown className={`transition ${openDropdown === "pelayanan" ? "rotate-180" : ""}`} />
            </button>
            {openDropdown === "pelayanan" && (
              <ul className="bg-emerald-800 text-sm">
                <li className="px-6 py-2">
                  <Link to="/rawat-jalan" onClick={closeAll}>
                    Rawat Jalan
                  </Link>
                </li>
                <li className="px-6 py-2">
                  <Link to="/rawat-inap" onClick={closeAll}>
                    Rawat Inap
                  </Link>
                </li>
                <li className="px-6 py-2">
                  <Link to="/penunjang" onClick={closeAll}>
                    Penunjang
                  </Link>
                </li>
                <li className="px-6 py-2">
                  <Link to="/igd" onClick={closeAll}>
                    IGD 24 Jam
                  </Link>
                </li>
                <li className="px-6 py-2">
                  <Link to="/dokter-kami" onClick={closeAll}>
                    Dokter Kami
                  </Link>
                </li>
                <li className="px-6 py-2">
                  <Link to="/bed-pasien" onClick={closeAll}>
                    Bed Pasien
                  </Link>
                </li>
                <li className="px-6 py-2">
                  <Link to="/go-obat" onClick={closeAll}>
                    Go Obat
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* BERITA */}
          <li className="border-b">
            <button onClick={() => toggleDropdown("berita")} className="w-full px-4 py-3 flex justify-between items-center">
              BERITA & ARTIKEL
              <MdKeyboardArrowDown className={`transition ${openDropdown === "berita" ? "rotate-180" : ""}`} />
            </button>
            {openDropdown === "berita" && (
              <ul className="bg-emerald-800 text-sm">
                <li className="px-6 py-2">
                  <Link to="/berita" onClick={closeAll}>
                    Berita
                  </Link>
                </li>
                <li className="px-6 py-2">
                  <Link to="/artikel-islami" onClick={closeAll}>
                    Artikel Islami
                  </Link>
                </li>
                <li className="px-6 py-2">
                  <Link to="/artikel-kesehatan" onClick={closeAll}>
                    Artikel Kesehatan
                  </Link>
                </li>
                <li className="px-6 py-2">
                  <Link to="/gallery" onClick={closeAll}>
                    Gallery
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* KARIR */}
          <li className="px-4 py-3 border-b">
            <Link to="/karir" onClick={closeAll}>
              KARIR
            </Link>
          </li>
          <li className="px-4 py-3" onClick={closeAll}>
            <div className="flex gap-1">
              <Link to="https://www.instagram.com/rspkumuhammadiyahsruweng/" target="_blank" className="w-8 h-8 flex items-center justify-center transition">
                <FaInstagram
                  className="text-lg text-slate-50
                   hover:text-pink-700 hover:scale-110 transition-all ease-in-out"
                />
              </Link>
              <Link to="https://web.facebook.com/pkusruweng" target="_blank" className="w-8 h-8 flex items-center justify-center transition">
                <FaFacebookF
                  className="text-lg text-slate-50
                   hover:text-blue-600
                  0 hover:scale-110 transition-all "
                />
              </Link>
              <Link to="https://www.tiktok.com/@rspkumuhammadiyahsruweng" target="_blank" className="w-8 h-8 flex items-center justify-center transition">
                <FaTiktok
                  className="text-lg text-slate-50
                   hover:text-gray-700 hover:scale-110 transition-all "
                />
              </Link>
              <Link to="https://www.youtube.com/@pkusruweng9292" target="_blank" className="w-8 h-8 flex items-center justify-center transition">
                <FaYoutube
                  className="text-lg text-slate-50
                   hover:text-red-600 hover:scale-110 transition-all "
                />
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeaderNavbar;
