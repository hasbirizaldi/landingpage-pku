import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { IoIosArrowBack } from "react-icons/io";
import ShareButton from "../components/ShareButton";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const API = "https://brewokode.site/api/public-artikels";

const SkeletonBox = ({ className }) => (
  <div className={`animate-pulse bg-slate-200 rounded ${className}`} />
);

const BeritaDetail = () => {
  const { slug } = useParams();

  const [artikel, setArtikel] = useState(null);
  const [related, setRelated] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ================= DETAIL ARTIKEL ================= */
  useEffect(() => {
    setLoading(true);

    axios
      .get(`${API}/${slug}`)
      .then((res) => {
        setArtikel(res.data.data);
        setRelated(res.data.related || []);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [slug]);

  /* ================= FEATURED ================= */
  useEffect(() => {
    axios
      .get(`${API}/featured`)
      .then((res) => {
        const filtered = (res.data.data || [])
          .filter(item => item.slug !== slug)
          .slice(0, 6);

        setFeatured(filtered);
      })
      .catch(console.error);
  }, [slug]);

  /* ================= LOADING ================= */
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-100 py-6">
        <div className="lg:w-[95%] mx-2 lg:mx-auto bg-white rounded-lg shadow">
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_2fr]">

            {/* KONTEN UTAMA */}
            <div className="p-5 lg:p-8 space-y-4">
              <SkeletonBox className="w-32 h-4" />
              <SkeletonBox className="w-3/4 h-8" />
              <SkeletonBox className="w-1/3 h-4" />

              <SkeletonBox className="w-full h-[320px] mt-4" />

              <div className="space-y-3 mt-6">
                <SkeletonBox className="w-full h-4" />
                <SkeletonBox className="w-full h-4" />
                <SkeletonBox className="w-5/6 h-4" />
                <SkeletonBox className="w-4/6 h-4" />
              </div>
            </div>

            {/* SIDEBAR */}
            <aside className="px-5 py-6 space-y-6 border-l border-gray-300">
              <SkeletonBox className="w-40 h-6" />

              {[1, 2, 3].map(i => (
                <div key={i} className="flex gap-3">
                  <SkeletonBox className="w-24 h-20" />
                  <div className="flex-1 space-y-2">
                    <SkeletonBox className="w-full h-4" />
                    <SkeletonBox className="w-2/3 h-3" />
                  </div>
                </div>
              ))}
            </aside>

          </div>

          {/* FEATURED BAWAH */}
          <div className="px-6 py-8">
            <SkeletonBox className="w-56 h-6 mb-4" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-white rounded shadow">
                  <SkeletonBox className="h-40 w-full rounded-t" />
                  <div className="p-3 space-y-2">
                    <SkeletonBox className="w-full h-4" />
                    <SkeletonBox className="w-1/2 h-3" />
                    <SkeletonBox className="w-full h-3" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    );
  }



  if (!artikel) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-slate-500">Artikel tidak ditemukan</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 pt-3 pb-6">
      <div className="lg:w-[95%] mx-2 lg:mx-auto bg-white rounded-lg shadow">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_2fr]">

          {/* ================= KONTEN UTAMA ================= */}
          <div className="p-2 lg:p-8">
            <Link
              to="/artikel-baru"
              className="inline-flex items-center text-sm text-emerald-700 font-semibold mb-4 hover:underline"
            >
              <IoIosArrowBack className="mr-1" />
              Kembali
            </Link>

            <h1 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-2">
              {artikel.title}
            </h1>

            <p className="text-sm text-slate-500 ">
              {new Date(artikel.published_at).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}{" "}
              | {artikel.category}
            </p>
            <p className="text-sm text-slate-800 mb-4">Penulis: {artikel.user.name}</p>

            <img
              src={`https://brewokode.site/storage/${artikel.image}`}
              alt={artikel.image_alt || artikel.title}
              className="w-full max-h-[420px] object-cover rounded-lg mb-6"
            />

            <div
              className="prose max-w-none prose-slate mb-6"
              dangerouslySetInnerHTML={{ __html: artikel.content }}
            />
            {artikel.tags && artikel.tags.length > 0 && (
              <div className="mb-4">
                <strong>Tags:</strong>
                <ul className="flex flex-wrap gap-2 mt-1">
                  {artikel.tags.map(tag => (
                    <li key={tag.id} className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition">
                      <Link to={`/tags/${tag.slug}`} className="text-emerald-700 hover:underline">
                        #{tag.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* SHARE */}
            <div className="mt-10 text-center flex items-center justify-center flex-col">
              <h4 className="font-semibold mb-3">Share Artikel</h4>
              <ShareButton title={artikel.title} />
            </div>

          </div>

          {/* ================= SIDEBAR ================= */}
          <aside className="sm:block hidden px-2 sm:px-5 py-6 sticky top-24 h-fit space-y-8 border-l border-gray-300">

            {/* ARTIKEL TERKAIT */}
            <div>
              <h3 className="font-bold text-lg mb-4">Artikel Terkait</h3>

              {related.length === 0 && (
                <p className="text-sm text-slate-500">
                  Tidak ada artikel terkait
                </p>
              )}

              <div className="space-y-4">
                {related.map(item => (
                  <Link
                    key={item.id}
                    to={`/artikel/${item.slug}`}
                    className="flex gap-3 group shadow rounded overflow-hidden"
                  >
                    <img
                      src={`https://brewokode.site/storage/${item.image}`}
                      alt={item.title}
                      className="w-24 h-20 object-cover rounded"
                    />
                    <div>
                      <p className="text-sm font-semibold group-hover:text-emerald-700 line-clamp-2">
                        {item.title}
                      </p>
                      <p className="text-xs text-slate-500">
                         {new Date(item.published_at).toLocaleDateString("id-ID", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                      </p>
                      <p className="text-slate-800 text-xs mb-4 line-clamp-2 mt-1">
                        {item.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          {/* MOBILE ARTIKEL TERKAIT */}
          <div className="px-1 sm:px-6 py-8 sm:hidden">
            <h3 className="text-xl font-semibold mb-4">
              Artikel Terkait
            </h3>

            {related.length === 0 && (
              <p className="text-sm text-slate-500">
                Tidak ada artikel terkait
              </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {related.map(item => (
                <Link
                  key={item.id}
                  to={`/artikel/${item.slug}`}
                  className="bg-white rounded shadow hover:shadow-lg transition border border-green-800"
                >
                  <img
                    src={`https://brewokode.site/storage/${item.image}`}
                    alt={item.title}
                    className="h-40 w-full object-cover rounded-t"
                  />
                  <div className="sm:p-3 p-2">
                    <p className="font-semibold line-clamp-2 text-lg">
                      {item.title}
                    </p>
                    <p className="text-sm text-slate-500 mt-1">
                      {new Date(item.published_at).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })} | {item.category}
                    </p>
                    {/* EXCERPT */}
                  <p className="text-slate-800 text-base mb-4 line-clamp-3 mt-1">
                    {item.excerpt}
                  </p>
                  <span
                    className="text-sm  text-blue-400 hover:text-blue-600 flex items-center"
                  >
                    Baca Selengkapnya
                    <MdKeyboardDoubleArrowRight className="text-sm ml-1" />
                  </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        {/* ================= FEATURED BAWAH ================= */}
        <div className="px-1 sm:px-6 py-8 ">
          <h3 className="text-xl font-semibold mb-4">
            Artikel Menarik Lainnya
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featured.map(item => (
              <Link
                key={item.id}
                to={`/artikel/${item.slug}`}
                className="bg-white rounded shadow hover:shadow-lg transition sm:border-none border border-green-700"
              >
                <img
                  src={`https://brewokode.site/storage/${item.image}`}
                  alt={item.title}
                  className="h-40 w-full object-cover rounded-t"
                />
                <div className="p-2 sm:p-3">
                  <p className="font-semibold line-clamp-2">
                    {item.title}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                     {new Date(item.published_at).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })} | {item.category}
                  </p>
                  {/* EXCERPT */}
                <p className="text-slate-800 text-sm mb-1 line-clamp-3 mt-1">
                  {item.excerpt}
                </p>
                 <span
                    className="text-sm  text-blue-400 hover:text-blue-600 flex items-center"
                  >
                    Baca Selengkapnya
                    <MdKeyboardDoubleArrowRight className="text-sm ml-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        </div>


      </div>
    </div>
  );
};

export default BeritaDetail;
