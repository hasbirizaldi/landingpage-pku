import { img } from "../api/data";
import { IoLocationSharp } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const HeaderNavbar = () => {
  return (
    <div>
      <header className="bg-white h-20 px-30 border-b-2 border-white flex ">
        <div className="flex items-center justify-between gap-20 w-full">
          <span className="flex items-center">
            <img src={img[0]} alt="PKU MUHAMMADIYAH SRUWENG" className="w-16 h-15 mr-2" />
            <div>
              <h1 className="font-bold text-xl">RS PKU MUHAMMADIYAH SRUWENG</h1>
              <p className="text-red-600 font-semibold">Semaikin Unggul dan Islami</p>
            </div>
          </span>
          <img src={img[1]} alt="LARSI" className=" h-12" />
        </div>
      </header>
      <nav className="bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-600 z-50">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-center items-center">
          {/* Menu desktop */}
          <ul className="hidden md:flex text-white font-semibold text-[14px] overflow-visible">
            <li className="px-3">
              <Link to="/">BERANDA</Link>
            </li>
            <li className="px-3">
              <Link to="/jadwal-dokter">DOKTER KAMI</Link>
            </li>
            <li className="px-3">
              <Link to="/indikator-mutu">INDIKATOR MUTU</Link>
            </li>
            <li className="px-3">
              <Link to="/falsafah-visi-misi">FALSAFAH VISI & MISI</Link>
            </li>
            <li className="px-3 relative group">
              <div className="flex items-end cursor-pointer">
                <span>FASILITAS</span>
                <MdKeyboardArrowDown className="text-xl" />
              </div>

              {/* Dropdown */}
              <div className="absolute left-0 top-8 bg-white text-black rounded shadow-lg w-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-100 ">
                    <Link to="rawat-jalan" className="text-sm font-normal">
                      Pelayanan Rawat Jalan
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/rawat-inap" className="text-sm font-normal">
                      Pelayanan Rawat Inap
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/penunjang" className="text-sm font-normal">
                      Pelayanan Penunjang
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/dokter-kami" className="text-sm font-normal">
                      Dokter Kami
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/igd" className="text-sm font-normal">
                      IGD 24 Jam
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/bed-pasien" className="text-sm font-normal">
                      Bed Pasien
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/go-obat" className="text-sm font-normal">
                      Go Obat
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="px-3 relative group">
              <div className="flex items-end cursor-pointer">
                <span>BERITA & ARTIKEL</span>
                <MdKeyboardArrowDown className="text-xl" />
              </div>

              {/* Dropdown */}
              <div className="absolute left-0 top-8 bg-white text-black rounded shadow-lg w-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-100 ">
                    <Link to="/berita" className="text-sm font-normal">
                      Berita
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/artikel-islami" className="text-sm font-normal">
                      Artikel Islami
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/artikel-kesehatan" className="text-sm font-normal">
                      Artikel Kesehatan
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/promosi-leaflet" className="text-sm font-normal">
                      Promosi & Leaflet
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/gallery" className="text-sm font-normal">
                      Gallery
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="px-3 relative group">
              <div className="flex items-end cursor-pointer">
                <span>VIDIO & TUTORIAL</span>
                <MdKeyboardArrowDown className="text-xl" />
              </div>

              {/* Dropdown */}
              <div className="absolute left-0 top-8 bg-white text-black rounded shadow-lg w-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-100 ">
                    <Link to="/keislaman" className="text-sm font-normal">
                      Keislaman
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/kesehatan" className="text-sm font-normal">
                      Kesehatan
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/simrs" className="text-sm font-normal">
                      SIMRS
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="px-3">
              <Link to="/karir">KARIR</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default HeaderNavbar;
