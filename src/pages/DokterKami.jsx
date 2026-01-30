import { useEffect, useState } from "react";
import axios from "axios";
import { IoIosArrowForward } from "react-icons/io";

const DokterSkeleton = () => {
  return (
    <div className="lg:w-[80%] lg:mx-auto mx-2 bg-white/40 p-6 rounded-lg shadow-ku animate-pulse">
      <div className="flex flex-col lg:flex-row gap-6">

        {/* FOTO */}
        <div className="flex justify-center">
          <div className="w-40 h-40 bg-slate-300 rounded " />
        </div>

        {/* INFO */}
        <div className="flex-1 space-y-3">

          {/* NAMA */}
          <div className="w-1/3 h-5 bg-slate-300 rounded" />

          {/* SPESIALIS */}
          <div className="w-1/4 h-4 bg-slate-300 rounded" />

          {/* BUTTON */}
          <div className="w-28 h-8 bg-slate-300 rounded" />

          {/* JADWAL DESKTOP */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-7 gap-1 mt-4">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="h-10 bg-slate-300 rounded" />
              ))}
            </div>
          </div>

          {/* JADWAL MOBILE */}
          <div className="lg:hidden grid grid-cols-2 gap-3 mt-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-14 bg-slate-300 rounded" />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

const DokterKami = () => {
  const ITEMS_PER_PAGE = 10;

  const [dokterList, setDokterList] = useState([]);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [loading, setLoading] = useState(true);

  const [searchNama, setSearchNama] = useState("");
  const [filterSpesialis, setFilterSpesialis] = useState("");

  // ================= FETCH API =================
  useEffect(() => {
    document.title = "RS PKU Sruweng | Dokter Kami";

    axios
      .get("https://brewokode.site/api/dokter-kami")
      .then((res) => {
        setDokterList(res.data);
      })
      .catch((err) => {
        console.error("Gagal ambil data dokter:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // ================= FILTER =================
  const dokterFiltered = dokterList.filter((dokter) => {
    const matchNama = dokter.nama
      .toLowerCase()
      .includes(searchNama.toLowerCase());

    const matchSpesialis = filterSpesialis
      ? dokter.spesialis === filterSpesialis
      : true;

    return matchNama && matchSpesialis;
  });

  const handleReset = () => {
    setSearchNama("");
    setFilterSpesialis("");
    setVisibleCount(ITEMS_PER_PAGE);
  };

  // ================= LOADING =================
  if (loading) {
    return (
      <div className="min-h-screen bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/5.jpg')" }}
      >
        <div className="bg-white/60 min-h-screen pb-6 space-y-6 pt-6">
          {[...Array(5)].map((_, i) => (
            <DokterSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }


  // ================= RENDER =================
  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/5.jpg')" }}
    >
      <div className="bg-white/60 min-h-screen pb-6">

        {/* ================= HEADER ================= */}
        <div className="pt-4">
          <div className="lg:w-[80%] lg:mx-auto mx-2 bg-gradient-to-r from-[#1A2A75]  to-[#079C4E] lg:px-12 lg:py-10 p-8 rounded-lg shadow-ku text-white">
            <h1 className="lg:text-3xl text-xl font-bold mb-1">
              Dokter Kami
            </h1>
            <div className="flex items-center gap-1 text-slate-200">
              <span>Beranda</span>
              <IoIosArrowForward />
              <span>Fasilitas</span>
            </div>
          </div>
        </div>

        {/* ================= FILTER ================= */}
        <div className="lg:w-[60%] lg:mx-auto mx-2 bg-gradient-to-r from-[#1A2A75]  to-[#079C4E] p-8 mt-8 rounded-xl shadow-ku">
          <p className="text-white text-lg font-semibold text-center mb-4">
            Cari Dokter di RS PKU Muhammadiyah Sruweng
          </p>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="grid lg:grid-cols-2 lg:gap-4 gap-2">
              <div>
                <label className="text-white text-sm">Cari Dokter</label>
                <input
                  type="text"
                  value={searchNama}
                  onChange={(e) => setSearchNama(e.target.value)}
                  placeholder="Nama dokter..."
                  className="w-full px-4 py-1 rounded outline-none bg-white focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div>
                <label className="text-white text-sm">Spesialis</label>
                <select
                  value={filterSpesialis}
                  onChange={(e) => setFilterSpesialis(e.target.value)}
                  className="w-full px-4 py-1 rounded bg-white focus:ring-2 focus:ring-yellow-500"
                >
                  <option value="">Semua Spesialis</option>
                  {[...new Set(dokterList.map(d => d.spesialis))].map((s, i) => (
                    <option key={i} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex gap-3 mt-4">
              <button
                type="button"
                onClick={handleReset}
                className="w-1/3 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold py-1 rounded cursor-pointer"
              >
                Reset
              </button>
            </div>
          </form>
        </div>

        {/* ================= LIST DOKTER ================= */}
        <div className="space-y-6 pt-6">
          {dokterFiltered.slice(0, visibleCount).map((dokter) => (
            <div
              key={dokter.id}
              className="lg:w-[80%] lg:mx-auto mx-2 bg-gradient-to-r from-[#1A2A75]  to-[#079C4E] lg:p-6 p-4 rounded-lg shadow-ku"
            >
              <div className="flex flex-col lg:flex-row gap-6">

                {/* FOTO */}
                <div className="flex justify-center">
                  <img
                    src={dokter.foto}
                    alt={dokter.nama}
                    className="w-60 h-60 object-contain rounded-full border-2 border-yellow-500 bg-gradient-to-r from-slate-300 via-white to-slate-300 "
                  />
                </div>

                {/* INFO */}
                <div className="flex-1">
                  <p className="text-lg  font-semibold text-white">
                    {dokter.nama}
                  </p>

                  <span className="inline-block mb-3  bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-600  text-white text-sm px-3 py-0.5 rounded">
                    {dokter.spesialis}
                  </span>

                  {/* JADWAL DESKTOP */}
                  <div className="hidden lg:grid grid-cols-3 gap-2">
                    {Object.entries(dokter.jadwal).map(([hari, jam]) => (
                      <div
                        key={hari}
                        className="bg-white border border-gray-500 shadow rounded px-3 py-1"
                      >
                        <p className="font-semibold text-sm capitalize text-emerald-700">
                          {hari}
                        </p>
                        <p className="text-sm">{jam}</p>
                      </div>
                    ))}
                  </div>

                  {/* JADWAL MOBILE */}
                  <div className="lg:hidden grid grid-cols-2 gap-2 mt-2">
                    {Object.entries(dokter.jadwal).map(([hari, jam]) => (
                      <div
                        key={hari}
                        className="bg-white border border-gray-500 shadow rounded p-2 "
                      >
                        <p className="font-semibold capitalize text-emerald-700 text-xs">
                          {hari}
                        </p>
                        <p className="text-xs">{jam}</p>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= LOAD MORE ================= */}
        {visibleCount < dokterFiltered.length && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setVisibleCount(v => v + ITEMS_PER_PAGE)}
              className="bg-[#1A2A75] text-white px-6 py-1 rounded cursor-pointer"
            >
              Lihat Lainnya
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default DokterKami;
