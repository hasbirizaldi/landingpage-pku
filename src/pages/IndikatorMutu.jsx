import { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";

const IndikatorMutu = () => {
  useEffect(() => {
    document.title = "RS PKU Sruweng | Indikator Mutu";
  }, []);
  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/5.jpg')" }}
    >
      <div className="bg-white/60 min-h-screen pb-6">

        {/* ================= HEADER ================= */}
        <div className="pt-4">
          <div className="lg:w-[80%] lg:mx-auto mx-2  bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600 lg:px-12 lg:py-10 p-8 rounded-lg shadow-ku text-white">
            <h1 className="lg:text-2xl text-xl font-bold mb-1">
              Indikator Mutu
            </h1>
            <div className="flex items-center gap-1 text-slate-200">
              <span>Beranda</span>
              <IoIosArrowForward />
              <span>Indikator Mutu</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndikatorMutu;
