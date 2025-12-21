import React from "react";
import { dataArtikel } from "../../api/data";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const BeritaArtikel = () => {
  return (
    <section className="bg-white/50 py-10 lg:px-5 px-3 lg:w-[80%] lg:mx-auto mx-2 rounded-lg shadow-ku my-5">
      <h1 className="font-bold text-center text-2xl sm:text-3xl text-green-900">Berita & Artikel</h1>
      <div className="h-[2px] w-60 lg:w-80 mx-auto   bg-gradient-to-r from-emerald-800 via-emerald-600 to-emerald-500 mb-8 sm:mb-10 mt-2"></div>

      <p className="text-xl sm:text-2xl font-semibold text-slate-700 mb-4">Berita Terbaru</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4">
        {dataArtikel.slice(0, 6).map((item) => (
          <div
            key={item.id}
            className="
              bg-white
              sm:rounded-xl rounded-lg
              shadow-md
              hover:shadow-xl
              transition
              overflow-hidden
              relative
              cursor-pointer
              pb-6
              hover:scale-[1.01]
            "
          >
            {/* IMAGE */}
            <img src={item.image} alt={item.title} className="h-44 sm:h-48 w-full object-contain" />

            <div className="p-3 sm:p-3">
              <p className="text-xs sm:text-sm text-slate-500 mb-1">{item.date}</p>
              <h2 className="font-bold text-base sm:text-lg text-slate-800 mb-1 line-clamp-2">{item.title}</h2>

              <div className="text-slate-600 text-sm mb-4 line-clamp-3" dangerouslySetInnerHTML={{ __html: item.desc }} />

              <Link
                to="/"
                className="
                  absolute bottom-4 left-4 sm:left-6
                  text-sm font-semibold
                  text-blue-600
                  hover:text-blue-800
                  transition
                  flex items-center
                "
              >
                Baca Selengkapnya
                <MdKeyboardDoubleArrowRight className="text-xl ml-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="sm:mt-10 mt-5 flex justify-center">
        <Link
          to="/berita"
          rel="noopener noreferrer"
          className="
             bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-600
              text-white
              px-4 sm:px-8 py-2 sm:py-2 
              rounded
              font-semibold
              text-sm sm:text-lg
              shadow-ku
              hover:scale-105
              transition
            "
        >
          Lihat Selengkapnya
        </Link>
      </div>
    </section>
  );
};

export default BeritaArtikel;
