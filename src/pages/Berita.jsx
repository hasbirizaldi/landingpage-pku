import { useEffect, useState } from "react";
import axios from "axios";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FiSearch } from "react-icons/fi";

const Berita = () => {
  const [activeCategory, setActiveCategory] = useState("berita");
  const [artikels, setArtikels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);


  const tabs = [
    { label: "Artikel Terbaru", value: "berita" },
    { label: "Artikel Kesehatan", value: "artikel-kesehatan" },
    { label: "Artikel Islami", value: "artikel-islami" },
  ];

  const categoryMap = {
    berita: null,
    "artikel-kesehatan": "Kesehatan",
    "artikel-islami": "Islami",
  };

  const fetchArtikel = (pageNumber = 1, reset = false) => {
    setLoading(true);

    axios
      .get("https://brewokode.site/api/public-artikels", {
        params: {
          page: pageNumber,
          search: search,
          category: categoryMap[activeCategory],
        },
      })
      .then((res) => {
        const newData = res.data.data.data;

        setArtikels((prev) =>
          reset ? newData : [...prev, ...newData]
        );

        setHasMore(
          res.data.data.current_page < res.data.data.last_page
        );
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    document.title = "RS PKU Sruweng | Berita & Artikel";
    fetchArtikel(1, true);
  }, [activeCategory, search]);

  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/5.jpg')" }}
    >
      <div className="bg-white/10 min-h-screen pb-3">
        <div className="pt-4">
          {/* HEADER */}
          <div className="lg:w-[80%] lg:mx-auto mx-2 text-slate-50 bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-500 lg:p-12 p-6 sm:h-36 rounded-lg shadow-ku mb-5">
            <h1 className="lg:text-3xl text-lg font-bold mb-1">
              Berita & Artikel
            </h1>
            <div className="flex items-center gap-1 text-slate-200 sm:text-base text-xs">
              <span>Beranda</span>
              <IoIosArrowForward />
              <span>Berita & Artikel</span>
            </div>
          </div>

          {/* TAB */}
          <div className="grid grid-cols-3 lg:w-[80%] h-12 lg:mx-auto mx-2 mb-3 bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-500 rounded-t-lg overflow-hidden ">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveCategory(tab.value)}
                className={`text-xs px-3 lg:text-base font-semibold text-white transition cursor-pointer
                  ${
                    activeCategory === tab.value
                      ? "border-b-4 border-yellow-500 bg-black/30"
                      : "hover:bg-black/20"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          
           {/* SEARCH */}
            <div className="lg:w-[80%] mx-2 lg:mx-auto mb-3">
              <div className="relative w-full">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-lg" />

                <input
                  type="text"
                  placeholder="Cari artikel..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded border border-slate-400
                            focus:outline-none focus:ring-2 focus:ring-emerald-500
                            bg-white"
                />
              </div>
            </div>

            {/* LIST */}
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 lg:w-[80%] sm:mx-auto mx-2">
              {loading && (
                <>
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="bg-white rounded shadow-ku overflow-hidden animate-pulse"
                    >
                      <div className="h-48 bg-slate-200" />
                      <div className="p-3 space-y-2">
                        <div className="h-4 bg-slate-200 rounded w-3/4" />
                        <div className="h-3 bg-slate-200 rounded w-1/2" />
                        <div className="h-3 bg-slate-200 rounded w-full" />
                      </div>
                    </div>
                  ))}
                </>
              )}

             {!loading &&
              artikels.map((item) => (
                <Link
                  to={`/artikel/${item.slug}`}
                  key={item.id}
                  className="bg-white rounded shadow-lg overflow-hidden relative hover:scale-[1.01] transition pb-6 block"
                >
                  <img
                    src={`https://brewokode.site/storage/${item.image}`}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-3">
                    <h2 className="font-semibold text-lg line-clamp-2">
                      {item.title}
                    </h2>

                    <p className="text-xs text-slate-500 mb-1">
                      {new Date(item.published_at).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}{" "}
                      | {item.category}
                    </p>

                    <p className="text-slate-800 text-sm mb-4 line-clamp-2">
                      {item.excerpt}
                    </p>

                    <span className="absolute bottom-4 left-3 text-sm font-semibold text-blue-600 flex items-center">
                      Baca Selengkapnya
                      <MdKeyboardDoubleArrowRight className="text-xl ml-1" />
                    </span>
                  </div>
                </Link>
              ))}

            </div>

            {!loading && hasMore && (
              <div className="flex justify-center mt-6">
                <button
                  onClick={() => {
                    const nextPage = page + 1;
                    setPage(nextPage);
                    fetchArtikel(nextPage);
                  }}
                  className="px-6 py-2 rounded bg-emerald-600 text-white
                            hover:bg-emerald-700 transition cursor-pointer"
                >
                  Lihat lainya
                </button>
              </div>
            )}


            {!loading && artikels.length === 0 && (
              <p className="text-center text-slate-500 col-span-3">
                Artikel tidak ditemukan
              </p>
            )}


        </div>
      </div>
    </div>
  );
};

export default Berita;
