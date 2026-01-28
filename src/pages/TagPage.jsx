import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";

const API = "http://localhost:8000/api/public-artikels";

const TagPage = () => {
  const { tag: slug } = useParams();

  const [artikels, setArtikels] = useState([]);
  const [tag, setTag] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(null);

  const fetchArtikel = (pageNumber = 1, reset = false, currentSearch = search) => {
    setLoading(true);

    axios
      .get(`${API}/tag/${slug}`, {
        params: {
          page: pageNumber,
          search: currentSearch,
        },
      })
      .then((res) => {
        if (res.data.success) {
          setTag(res.data.tag);

          const newData = res.data.data.data;

          setArtikels((prev) => (reset ? newData : [...prev, ...newData]));

          setHasMore(res.data.data.current_page < res.data.data.last_page);
        } else {
          setError("Tag tidak ditemukan");
          setArtikels([]);
          setHasMore(false);
        }
      })
      .catch(() => {
        setError("Gagal mengambil data");
        setArtikels([]);
        setHasMore(false);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (!slug) return;

    setPage(1);
    fetchArtikel(1, true, search);
  }, [slug, search]);

  useEffect(() => {
    if (page === 1) return; // sudah fetch di useEffect di atas
    fetchArtikel(page, false, search);
  }, [page]);

  if (!slug) return <p className="text-center mt-10">Tag tidak ditemukan.</p>;

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

          {/* ERROR */}
          {error && (
            <p className="text-center text-red-600 mb-4">{error}</p>
          )}

          {/* LIST ARTIKEL */}
          <div className="w-[80%] mx-auto">
            <p className="lg:text-xl text-lg font-bold mb-2 flex">
                Artikel dengan tag: <span className="text-blue-600 ml-2">#{tag ? tag.name : slug}</span>
            </p>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 lg:w-full sm:mx-auto mx-2">
                {loading &&
                [...Array(6)].map((_, i) => (
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

                {!loading &&
                artikels.length === 0 &&
                !error && (
                    <p className="text-center text-slate-500 col-span-3">
                    Artikel tidak ditemukan
                    </p>
                )}

                {!loading &&
                artikels.map((item) => (
                    <Link
                    to={`/artikel/${item.slug}`}
                    key={item.id}
                    className="bg-white rounded shadow-lg overflow-hidden relative hover:scale-[1.01] transition pb-6 block"
                    >
                    <img
                        src={`http://localhost:8000/storage/${item.image}`}
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
          </div>

          {/* LOAD MORE */}
          {!loading && hasMore && (
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setPage((p) => p + 1)}
                className="px-6 py-2 rounded bg-emerald-600 text-white
                          hover:bg-emerald-700 transition cursor-pointer"
              >
                Lihat lainnya
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TagPage;
