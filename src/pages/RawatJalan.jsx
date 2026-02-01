import { useEffect, useState } from "react";
import { rawatJalan } from "../api/data";
import { IoIosArrowForward } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";

const RawatJalan = () => {
  useEffect(() => {
    document.title = "RS PKU Sruweng | Pelayanan Rawat Jalan";
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
              Pelayanan Rawat Jalan
            </h1>
            <div className="flex items-center gap-1 text-slate-200">
              <span>Beranda</span>
              <IoIosArrowForward />
              <span>Fasilitas</span>
            </div>
          </div>
        </div>

        {/* ================= LIST POLIKLINIK ================= */}
        <div className="lg:w-[80%] lg:mx-auto mx-2 mt-10 space-y-10">

          {rawatJalan.slice(0, visibleCount).map((poli, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="bg-white rounded-xl pb-6 shadow-ku overflow-hidden "
            >
              {/* Nama Poliklinik */}
              <div className="bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600 py-3 px-5 font-semibold text-white text-lg">
                {poli.poliklinik}
              </div>

              <div className="px-6 py-2">

                {/* ================= DOKTER ================= */}

                <div className="flex gap-2 flex-wrap">
                  {poli.dokterPoli.map((dokter, i) => (
                    <div
                      key={i}
                      className="w-72 text-center py-4 px-3"
                    >
                      <img
                        src={dokter.foto}
                        alt={dokter.nama}
                        className="w-72 h-56 mx-auto bg-gradient-to-r from-slate-300 via-white to-slate-300 border-gray-500 border-x-1 border-t-1 rounded-t-xl object-contain "
                      />

                      <div className="bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600 py-2 rounded-b">
                        <p className=" text-xs font-semibold text-slate-50 mb-1 rounded">
                          {dokter.nama}
                        </p>
                        <span className="text-xs bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-600 text-white px-9 py-1 rounded">{poli.spesialis}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* ================= LAYANAN ================= */}
                <h2 className="text-emerald-900 font-bold text-lg mt-8 mb-4 ml-3">
                  Layanan {poli.poliklinik}
                </h2>

                <ul className="  text-slate-700 space-y-1 ml-6">
                  {poli.layanan.map((layanan, j) => (
                    <li key={j} className="flex items-center gap-2"><FaCheckCircle className="text-green-700"/>{layanan} </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}

           {/* ================= BUTTON LOAD MORE ================= */}
          {visibleCount < rawatJalan.length && (
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

export default RawatJalan;
