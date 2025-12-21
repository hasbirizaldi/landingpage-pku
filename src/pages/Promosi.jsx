import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { dataArtikel } from "../api/data";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Promosi = () => {
  const [activeCategory, setActiveCategory] = useState("promosi-leaflet");

  const tabs = [
    { label: "Berita Terbaru", value: "berita" },
    { label: "Artikel Kesehatan", value: "artikel-kesehatan" },
    { label: "Artikel Islami", value: "artikel-islami" },
    { label: "Promosi & Leaflet", value: "promosi-leaflet" },
    { label: "Gallery", value: "gallery" },
  ];

  useEffect(() => {
    document.title = "RS PKU Sruweng | Berita & Artikel";
  }, []);

  const filteredArtikel = dataArtikel.filter((item) => item.category === activeCategory).slice(0, 6);
  const imageOnlyCategory = ["promosi-leaflet", "gallery"];

  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: "url('/5.jpg')", // pastikan di public
      }}
    >
      {/* overlay biar teks kebaca */}
      <div className="bg-white/10 min-h-screen pb-5">
        <div className="pt-4">
          <div className="lg:w-[80%] lg:mx-auto mx-2 text-slate-50 bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-500 lg:p-12 p-8 flex flex-col justify-center h-36 rounded-lg shadow-ku sm:mb-8 mb-5">
            <h1 className="lg:text-3xl text-2xl font-bold mb-1">Berita & Artikel</h1>
            <div className="flex items-center gap-1 text-slate-200">
              <span>Beranda</span>
              <IoIosArrowForward />
              <span>Berita & Artikel</span>
            </div>
          </div>
          <div className="grid grid-cols-5 lg:w-[80%] h-12 items-center lg:mx-auto mx-2 mb-5 overflow-hidden bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-500 rounded-t-lg">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveCategory(tab.value)}
                className={`
        text-xs lg:text-base font-semibold text-slate-50 flex justify-center items-center h-full
        transition cursor-pointer
        ${activeCategory === tab.value ? "border-b-4 border-yellow-400 bg-black/30" : "hover:bg-black/20"}
      `}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 grid-cols-1 sm:gap-6 gap-4 lg:w-[80%] mx-2 lg:mx-auto ">
            {filteredArtikel.map((item) => {
              const isImageOnly = imageOnlyCategory.includes(activeCategory);

              return (
                <div
                  key={item.id}
                  className={`
        bg-white
        ${isImageOnly ? "p-0" : "pb-6"}
        sm:rounded-lg rounded
        shadow-ku
        hover:shadow-xl
        transition
        overflow-hidden
        relative
        cursor-pointer
        hover:scale-[1.01]
      `}
                >
                  {/* IMAGE */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`
          w-full object-cover
          ${isImageOnly ? "h-full" : "h-44 sm:h-48"}
        `}
                  />

                  {/* JIKA BUKAN IMAGE ONLY */}
                  {!isImageOnly && (
                    <div className="p-3">
                      <p className="text-xs sm:text-sm text-slate-500 mb-1">{item.date}</p>

                      <h2 className="font-semibold text-base sm:text-lg text-slate-800 mb-1 line-clamp-2">{item.title}</h2>

                      <div className="text-slate-600 text-sm mb-4 line-clamp-2" dangerouslySetInnerHTML={{ __html: item.desc }} />

                      <Link to="/" className="absolute bottom-4 left-2 sm:left-3 text-sm font-semibold text-blue-600 hover:text-blue-800 flex items-center">
                        Baca Selengkapnya
                        <MdKeyboardDoubleArrowRight className="text-xl ml-1" />
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promosi;
