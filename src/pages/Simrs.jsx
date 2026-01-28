import { useEffect, useState } from "react";
import axios from "axios";
import { IoIosArrowForward } from "react-icons/io";
import { getEmbedUrl } from "../lib/helper";
import { formatTanggal } from "../lib/helper";

const API = "https://brewokode.site/api/public-vidios/featured";

const VidioSkeleton = () => {
  return (
    <div className="bg-white rounded-lg shadow-ku overflow-hidden animate-pulse">
      {/* video */}
      <div className="aspect-video bg-slate-300" />

      {/* text */}
      <div className="p-2 space-y-2">
        <div className="h-4 bg-slate-300 rounded w-3/4"></div>
        <div className="h-4 bg-slate-200 rounded w-1/2"></div>
      </div>
    </div>
  );
};


const Simrs = () => {
  const [activeCategory, setActiveCategory] = useState("simrs");
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const tabs = [
    { label: "Vidio Promosi", value: "promosi" },
    { label: "Vidio Kesehatan", value: "kesehatan" },
    { label: "Vidio Keislaman", value: "islami" },
    { label: "Vidio SIMRS", value: "simrs" },
  ];

  const fetchVidio = async (pageNumber = 1, category = activeCategory) => {
    try {
      setLoading(true);

      const res = await axios.get(
        `${API}?page=${pageNumber}&category=${category}`
      );

      setData((prev) =>
        pageNumber === 1 ? res.data.data : [...prev, ...res.data.data]
      );

      setPage(res.data.meta.current_page);
      setHasMore(res.data.meta.has_more);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // load awal + ganti tab
  useEffect(() => {
    setData([]);
    setPage(1);
    setHasMore(true);
    fetchVidio(1, activeCategory);
  }, [activeCategory]);


  useEffect(() => {
    document.title = "RS PKU Sruweng | Vidio & Tutorial";
  }, []);

  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/5.jpg')" }}
    >
      <div className="bg-white/10 min-h-screen pb-8">
        <div className="pt-4">

          {/* HEADER */}
          <div className="lg:w-[80%] lg:mx-auto mx-2 text-slate-50 bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-500 lg:p-12 p-8 h-36 rounded-lg shadow-ku mb-6">
            <h1 className="lg:text-3xl text-2xl font-bold mb-1">
              Vidio & Tutorial
            </h1>
            <div className="flex items-center gap-1 text-slate-200">
              <span>Beranda</span>
              <IoIosArrowForward />
              <span>Vidio & Tutorial</span>
            </div>
          </div>

          {/* TAB */}
          <div className="grid grid-cols-4 lg:w-[80%] h-12 lg:mx-auto mx-2 overflow-hidden mb-6 bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-500 rounded-t-lg">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveCategory(tab.value)}
                className={`text-xs cursor-pointer lg:text-base font-semibold text-white flex items-center justify-center transition
                  ${
                    activeCategory === tab.value
                      ? "border-b-4 border-yellow-400 bg-black/30"
                      : "hover:bg-black/20"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* CONTENT */}
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 lg:w-[80%] mx-2 lg:mx-auto">

            {/* SKELETON */}
            {loading && data.length === 0 &&
              Array.from({ length: 6 }).map((_, i) => (
                <VidioSkeleton key={i} />
              ))
            }

            {/* DATA */}
            {!loading && data.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-ku overflow-hidden hover:shadow-xl transition"
              >
                <div className="aspect-video">
                  <iframe
                    src={getEmbedUrl(item.link)}
                    title={item.title}
                    className="w-full h-full"
                    allowFullScreen
                  />
                </div>

                <div className="p-2">
                  <h2 className="font-semibold text-slate-800 line-clamp-2">
                    {item.title}
                  </h2>
                  <span className="text-sm text-gray-600">{formatTanggal(item.created_at)} | Vidio {item.category.charAt(0).toUpperCase() + item.category.slice(1)}</span>
                </div>
              </div>
            ))}

          </div>

          {/* LOAD MORE */}
          {hasMore && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => fetchVidio(page + 1, activeCategory)}
                disabled={loading}
                className="bg-emerald-600 cursor-pointer hover:bg-emerald-700 text-white px-6 py-1 rounded"
              >
                {loading ? "Memuat..." : "Muat Lainnya"}
              </button>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Simrs;
