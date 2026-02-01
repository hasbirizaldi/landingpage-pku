import { useEffect, useState } from "react";
import { penunjang } from "../api/data";
import { IoIosArrowForward } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";

const PelayananPenunjang = () => {
  useEffect(() => {
    document.title = "RS PKU Sruweng | Pelayanan Penunjang";
  }, []);

   // ================= PAGINATION STATE =================
  const [visibleCount, setVisibleCount] = useState(4);

  // tombol load more
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/5.jpg')" }}
    >
      <div className="bg-white/60 min-h-screen pb-10">

        {/* ================= HEADER ================= */}
        <div className="pt-4">
          <div className="lg:w-[80%] lg:mx-auto mx-2 bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600 lg:px-12 lg:py-10 p-8 rounded-lg shadow-ku text-white">
            <h1 className="lg:text-2xl text-xl font-bold mb-1">
              Pelayanan Penunjang
            </h1>
            <div className="flex items-center gap-1 text-slate-200">
              <span>Beranda</span>
              <IoIosArrowForward />
              <span>Fasilitas</span>
            </div>
          </div>
        </div>

        {/* ================= LIST PENUNJANG ================= */}
        <div className="lg:w-[80%] lg:mx-auto mx-2 mt-10 space-y-10">

          {penunjang.slice(0, visibleCount).map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="bg-white rounded-xl pb-6 shadow-ku overflow-hidden "
            >
              {/* Nama Poliklinik */}
              <div className="bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600 py-3 px-5 font-semibold text-white text-lg">
                {item.nama}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[2fr_3fr] px-6 py-2">
                <div>
                  <img src={item.image} alt="" />
                </div>
                <div>
                {/* ================= LAYANAN ================= */}
                <h2 className="text-emerald-900 font-bold text-lg mt-2 mb-4 ml-3">
                  Layanan
                </h2>

                <ul className="  text-slate-700 space-y-1 ml-6">
                  {item.fasilitas.map((fas, j) => (
                    <li key={j} className="flex items-center gap-2"><FaCheckCircle className="text-green-700"/>{fas} </li>
                  ))}
                </ul>
                </div>

              </div>
            </div>
          ))}

           {/* ================= BUTTON LOAD MORE ================= */}
          {visibleCount < penunjang.length && (
            <div className="text-center mt-8">
              <button
                onClick={handleLoadMore}
                className="px-8 py-1 cursor-pointer rounded bg-gradient-to-r from-emerald-800 via-emerald-600 to-emerald-500 text-white font-semibold shadow-md hover:scale-103 transition"
              >
                Lihat Lainya
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default PelayananPenunjang;
