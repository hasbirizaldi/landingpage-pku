import { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { direksi } from "../api/data";

const StrukturOrganisasi = () => {
  useEffect(() => {
    document.title = "RS PKU Sruweng | Struktur Organisasi";
  }, []);
  return (
   <div
      className="min-h-screen bg-fixed bg-cover bg-center pt-4 pb-8"
      style={{
        backgroundImage: "url('/5.jpg')", // pastikan di public
      }}
    >
      <div className="lg:w-[80%] text-slate-50 sm:mx-auto mx-2 bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600 lg:p-12 p-8 flex items-start justify-center flex-col h-36 rounded-lg">
        <h1 className="sm:text-3xl text-2xl font-bold mb-1">Struktur Organisasi</h1>
        <div className="flex items-center gap-1 text-slate-200">
          <span>Beranda</span>
          <span>
            <IoIosArrowForward />
          </span>
          <span>Tentang Kami</span>
        </div>
      </div>
      <div className="bg-white/60 lg:w-[90%] mx-2 lg:mx-auto mt-8 sm:p-8 py-8 px-4 rounded-xl shadow-ku">
        <p className="flex flex-col font-bold text-center text-xl sm:text-3xl text-green-900">
          <span>Direksi RS PKU</span>
          <span>Muhammadiyah Sruweng</span>
        </p>
        <div className="h-[3px] w-[90%] lg:w-120 mx-auto bg-gradient-to-r from-emerald-800 via-emerald-600 to-emerald-500 mb-8 sm:mb-10 mt-2"></div>
        <div className="grid lg:grid-cols-4 grid-cols-1 sm:gap-5 gap-4">
          {direksi.map((item, index)=>(
            <div
              key={index}
              className="group border-2 border-yellow-500 rounded-xl overflow-hidden shadow-ku 
                        cursor-pointer transition-all duration-300 ease-in-out 
                        hover:scale-[1.03]"
            >
              {/* Image */}
              <div className="bg-gradient-to-r from-slate-400 via-white to-slate-400 flex justify-center items-center">
                <img
                  src={item.img}
                  alt={item.nama}
                  className="h-60 w-full object-contain"
                />
              </div>

              {/* Content */}
              <div className="bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600 text-white py-4 px-2">
                <p className="text-center text-sm font-semibold leading-tight">
                  {item.nama}
                </p>
                <p className="text-center text-xs font-bold text-yellow-400 mt-2">
                  {item.jabatan}
                </p>
              </div>
            </div>

          ))}
        
        </div>
      </div>
    </div>
  );
};

export default StrukturOrganisasi;
