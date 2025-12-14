import { useEffect } from "react";
import PartnerKami from "../components/home/PartnerKami";
import JknGoObat from "../components/home/JknGoObat";
import PelayananKami from "../components/home/PelayananKami";
import Slider from "../components/home/Slider";
import BeritaArtikel from "../components/home/BeritaArtikel";

const Home = () => {
  useEffect(() => {
    document.title = "RS PKU Muhammadiyah Sruweng | Beranda";
  }, []);
  return (
    <div>
      {/* konten */}
      <div className="bg-slate-200 relative">
        {/* fixed */}
        {/* <div className="fixed z-50 bottom-1 left-1/2 -translate-x-1/2 shadow-icon rounded-3xl shadow-ku w-[45%] flex h-18">
          <div className="flex gap-3 items-center justify-center cursor-pointer group bg-red-700 w-1/3 hover:bg-red-500 rounded-l-lg">
            <div className="border-slate-100 border-2 p-2 rounded-full shadow-ku transition group-hover:bg-red-700">
              <BiSolidAmbulance className="text-4xl text-slate-100 group-hover:text-white" />
            </div>
            <div>
              <p className="text-lg font-bold text-slate-100 group-hover:text-slate-100 transition">EMERGENCY</p>
              <p className="text-lg font-bold text-slate-100 group-hover:text-slate-100 transition">0281xxxxx</p>
            </div>
          </div>

          <div className="bg-slate-100  w-0.5"></div>
          <div className="flex gap-3 items-center justify-center cursor-pointer group w-1/3 bg-blue-600 hover:bg-blue-700">
            <div className="border-2 border-slate-50 p-2 rounded-full shadow-ku group-hover:bg-blue-800 transition">
              <FaPhoneAlt className="text-3xl text-slate-100" />
            </div>

            <div className="text-slate-50 transition">
              <p className="text-lg font-bold text-center">CARE CENTER</p>
              <p className="text-lg font-bold text-center">0287 - 6601061</p>
            </div>
          </div>

          <div className="bg-slate-100-400 w-0.5"></div>
          <div className="flex gap-3 items-center justify-center cursor-pointer group w-1/3 bg-green-600 rounded-r-lg">
            <div className="border-2 border-slate-100 p-2 rounded-full shadow-ku group-hover:bg-green-800 transition">
              <FaUserMd className="text-3xl text-slate-100" />
            </div>
            <div className="text-slate-100 transition">
              <p className="text-lg font-bold text-center">LIHAT JADWAL</p>
              <p className="text-lg font-bold text-center">DOKTER</p>
            </div>
          </div>
        </div> */}

        <Slider />
        <JknGoObat />
        <PartnerKami />
        <PelayananKami />
        <BeritaArtikel />
      </div>
    </div>
  );
};

export default Home;
