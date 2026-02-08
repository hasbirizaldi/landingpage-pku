import { useEffect, useState } from "react";
import { rawatInap } from "../api/data";
import { IoIosArrowForward } from "react-icons/io";
import { FaCheckCircle, FaWhatsapp } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const RawatInap = () => {
  const [activeRoom, setActiveRoom] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    document.title = "RS PKU Sruweng | Pelayanan Rawat Jalan";
  }, []);

   // ================= PAGINATION STATE =================
  const [visibleCount, setVisibleCount] = useState(1);

  // tombol load more
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 1);
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
              Pelayanan Rawat Inap
            </h1>
            <div className="flex items-center gap-1 text-slate-200">
              <span>Beranda</span>
              <IoIosArrowForward />
              <span>Fasilitas</span>
            </div>
          </div>
        </div>

        {/* ================= LIST RAWAT INAP ================= */}
        <div className="lg:w-[80%] lg:mx-auto mx-2 mt-10 space-y-10">

          {rawatInap.slice(0, visibleCount).map((bangsal, index) => (
            <div
              key={index}
              className="bg-white rounded-lg pb-6 shadow-ku overflow-hidden"
            >
              {/* Nama Bangsal */}
              <div className="bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600 py-4 px-3 sm:px-5 font-semibold text-white text-lg border-b-5 border-yellow-500">
                <h2>{bangsal.bangsal}</h2>
              </div>

              <div className="sm:px-5 px-1 py-3 space-y-10">
                {bangsal.kelas.map((kelas, i) => (
                  <div key={i} className="px-1">

                    {/* Nama Kelas */}
                    <h3 className="sm:text-lg text-sm font-semibold bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-700 text-white mb-2 w-50 py-1 px-3 rounded shadow-lg">
                      {kelas.namaKelas}
                    </h3>

                    {/* Swiper Images */}
                    <Swiper
                      modules={[Navigation, Autoplay]}
                      navigation
                      autoplay={{ delay: 1500, disableOnInteraction: false }}
                      loop
                      spaceBetween={20}
                      slidesPerView={3}
                      breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                      }}
                      className="mb-6"
                    >
                      {kelas.images.map((img, j) => (
                        <SwiperSlide key={j}>
                          <div
                            onClick={() => {
                              setActiveRoom(kelas);
                              setActiveIndex(j);
                            }}
                            className="overflow-hidden rounded-lg cursor-pointer"
                          >
                            <div
                              className="h-[200px] bg-cover bg-center hover:scale-105 transition duration-500"
                              style={{ backgroundImage: `url(${img})` }}
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    {/* Grid Detail */}
                    <div className="grid md:grid-cols-[2fr_1fr] gap-6">

                      {/* Fasilitas */}
                      <div>
                        <h4 className="text-emerald-900 font-bold text-sm sm:text-lg mb-3">
                          Fasilitas
                        </h4>
                        <ul className="text-slate-700 sm:space-y-2 space-y-1 sm:text-base text-sm">
                          {kelas.fasilitas.map((fas, k) => (
                            <li key={k} className="flex items-center gap-2">
                              <FaCheckCircle className="text-green-700 sm:text-base text-s," />
                              {fas}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Harga & WA */}
                      <div className="flex flex-col justify-center items-center gap-6">
                        <div className="border border-yellow-500 shadow rounded font-semibold  w-full text-center">
                          <p className="bg-yellow-500 text-white py-1 sm:text-base text-sm">Harga</p>
                          <p className="py-2 text-slate-700 sm:text-base text-sm">
                            Rp{" "}
                            {typeof kelas.harga === "number"
                              ? kelas.harga.toLocaleString("id-ID")
                              : kelas.harga}
                          </p>
                        </div>

                        <div className="border border-green-700 shadow rounded font-semibold  w-full text-center sm:text-base text-sm">
                          <p className="flex justify-center items-center gap-2 bg-green-700 text-white py-1">
                            <FaWhatsapp className="sm:text-3xl text-xl"/> Pendaftaran
                          </p>
                          <p className="py-2 text-slate-700">
                            08xxxxxxxxxx
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}


           {/* ================= BUTTON LOAD MORE ================= */}
          {visibleCount < rawatInap.length && (
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
       {/* ================= MODAL IMAGE ================= */}
      {activeRoom && activeIndex !== null && (
        <div className="fixed inset-0 z-50">
          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-black/80"
            onClick={() => {
              setActiveRoom(null);
              setActiveIndex(null);
            }}
          />

          {/* MODAL */}
          <div className="relative z-50 w-full h-full flex items-center justify-center">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => {
                setActiveRoom(null);
                setActiveIndex(null);
              }}
              className="absolute top-5 right-5 text-white text-5xl z-[999]"
            >
              ✕
            </button>

            {/* SWIPER PREVIEW */}
            <Swiper
              modules={[Navigation]}
              navigation
              initialSlide={activeIndex}
              slidesPerView={1}
              loop
              className="w-full h-full flex items-center justify-center"
            >
              {activeRoom.images.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={img}
                      alt={`Preview ${i}`}
                      className="max-w-[95%] max-h-[90%] rounded-lg shadow-lg"
                      draggable={false}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}

    </div>
  );
};

export default RawatInap;