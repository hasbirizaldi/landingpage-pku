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
  const [visibleCount, setVisibleCount] = useState(3);

  // tombol load more
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
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

          {rawatInap.slice(0, visibleCount).map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="bg-white rounded-xl pb-6 shadow-ku overflow-hidden "
            >
              {/* Nama Bangsal */}
              <div className="bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600 py-3 px-5 font-semibold text-white text-lg border-b-3 border-yellow-500">
                <h2>{item.kelas}</h2>
              </div>

              <div className="px-5 py-2">
                <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                loop
                spaceBetween={20}
                slidesPerView={3}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="lg:my-3 my-1 "
              >
                {item.images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <div onClick={() => {
                      setActiveRoom(item);
                      setActiveIndex(i);
                    }} className="overflow-hidden lg:rounded-lg cursor-pointer">
                      <div className="h-[180px] bg-cover bg-center hover:scale-105 transition duration-500" style={{ backgroundImage: `url(${img})` }} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              
              <div className="grid sm:grid-cols-2 grid-cols-1">
                <div>
                  {/* ================= FASILITAS ================= */}
                  <h4 className="text-emerald-900 font-bold text-lg mb-2 ml-3">
                    Fasilitas 
                  </h4>

                  <ul className="  text-slate-700 space-y-1 ml-6">
                    {item.fasilitas.map((fas, j) => (
                      <li key={j} className="flex items-center gap-2"><FaCheckCircle className="text-green-700"/>{fas} </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col justify-center items-center gap-6">
                  <div className="border border-yellow-500 shadow rounded font-semibold text-lg">
                    <p className="bg-yellow-500 text-white px-3 text-center">Harga</p>
                    <p className="px-3 text-slate-600">Rp. {item.harga.toLocaleString("id-ID")}</p>
                  </div>
                  <div className="border border-green-700 shadow rounded font-semibold text-lg">
                    <p className="flex gap-1 items-center bg-green-700 text-white px-3 text-center"><FaWhatsapp className="text-xl "/> Pendaftaran</p>
                    <p className="px-3 text-slate-600">08xxxxxxxxxxxx</p>
                  </div>
                </div>
              </div>

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