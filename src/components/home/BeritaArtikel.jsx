import React from "react";
import { dataArtikel } from "../../api/data";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const BeritaArtikel = () => {
  return (
    <section className="bg-slate-50 px-4 sm:px-8 md:px-20 lg:px-60 py-10 sm:py-14">
      <h1 className="font-bold text-center text-2xl sm:text-3xl text-slate-800">Berita & Artikel</h1>

      <div className="h-[2px] w-40 sm:w-60 lg:w-80 mx-auto bg-slate-600 mb-10 sm:mb-14 mt-2"></div>

      <p className="text-xl sm:text-2xl font-semibold text-slate-800 mb-4">Berita Terbaru</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {dataArtikel.map((item) => (
          <div
            key={item.id}
            className="
              bg-white
              rounded-xl
              shadow-md
              hover:shadow-xl
              transition
              overflow-hidden
              relative
              cursor-pointer
              pb-14
            "
          >
            {/* IMAGE */}
            <img src={item.image} alt={item.title} className="h-44 sm:h-48 w-full object-cover" />

            <div className="p-4 sm:p-6">
              <p className="text-xs sm:text-sm text-slate-500 mb-2">{item.date}</p>

              <h2 className="font-bold text-base sm:text-lg text-slate-800 mb-3 line-clamp-2">{item.title}</h2>

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
    </section>
  );
};

export default BeritaArtikel;
