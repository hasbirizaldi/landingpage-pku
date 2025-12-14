import React from "react";
import { dataArtikel } from "../../api/data";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const BeritaArtikel = () => {
  return (
    <section className="bg-slate-50 px-6 md:px-20 lg:px-60 py-14">
      <h1 className="font-bold text-center text-3xl text-slate-800">Berita & Artikel</h1>
      <div className="h-[2px] w-80 mx-auto bg-slate-600 mb-14 mt-2"></div>
      <p className="text-2xl font-semibold text-slate-800 mb-3">Berita Terbaru</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dataArtikel.map((item) => (
          <Link to="/" key={item.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden relative cursor-pointer">
            <img src={item.image} alt={item.title} className="h-48 w-full object-cover" />

            <div className="p-6">
              <p className="text-sm text-slate-500 mb-2">{item.date}</p>
              <h2 className="font-bold text-lg text-slate-800 mb-3">{item.title}</h2>
              <div className="text-slate-600 text-sm mb-4 line-clamp-2" dangerouslySetInnerHTML={{ __html: item.desc }} />

              <Link to="/" className="absolute  bottom-5 text-sm font-semibold text-blue-600 hover:text-blue-800 transition flex items-center">
                Baca Selengkapnya <MdKeyboardDoubleArrowRight className="text-xl" />
              </Link>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BeritaArtikel;
