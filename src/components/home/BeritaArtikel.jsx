import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import axios from "axios";

const BeritaArtikel = () => {
  const [artikels, setArtikels] = useState([]);

  useEffect(() => {
    axios
      .get("https://brewokode.site/api/public-artikels/featured")
      .then((res) => {
        setArtikels(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <section className="bg-white/50 py-10 lg:px-5 px-3 lg:w-[80%] lg:mx-auto mx-2 rounded-lg shadow-ku my-5">
      <h1 className="font-bold text-center text-2xl sm:text-3xl text-green-900">Berita & Artikel</h1>
      <div className="h-[2px] w-60 lg:w-80 mx-auto   bg-gradient-to-r from-emerald-800 via-emerald-600 to-emerald-500 mb-8 sm:mb-10 mt-2"></div>

      <h3 className="text-xl sm:text-xl font-semibold text-slate-700 mb-4">Artikel Menarik</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {artikels.map((item) => (
          <Link to={`/artikel/${item.slug}`}
            key={item.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden relative pb-6"
          >
            {/* IMAGE */}
            <img
              src={`https://brewokode.site/storage/${item.image}`}
              alt={item.image_alt || item.title}
              className="h-44 sm:h-48 w-full object-cover"
            />

            <div className="p-3">

              {/* TITLE */}
              <h2 className="font-bold text-base sm:text-lg text-slate-800 mb-1 line-clamp-2">
                {item.title}
              </h2>

              {/* DATE & AUTHOR */}
              <p className="text-xs sm:text-sm text-slate-500 mb-1">
                {new Date(item.published_at).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}{" "}
                 | {item.category}
              </p>

              {/* EXCERPT */}
              <p className="text-slate-800 text-sm mb-4 line-clamp-3">
                {item.excerpt}
              </p>

              {/* LINK */}
              <span
                className="absolute bottom-4 left-4 text-sm font-semibold text-blue-600 hover:text-blue-800 flex items-center"
              >
                Baca Selengkapnya
                <MdKeyboardDoubleArrowRight className="text-xl ml-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="sm:mt-10 mt-5 flex justify-center">
        <Link
          to="/artikel-baru"
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
          Lihat berita lainya
        </Link>
      </div>
    </section>
  );
};

export default BeritaArtikel;
