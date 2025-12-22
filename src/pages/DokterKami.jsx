import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { dokterList } from "../api/data";
import { Link } from "react-router-dom";

const DokterKami = () => {
  const [searchNama, setSearchNama] = useState("");
  const [filterSpesialis, setFilterSpesialis] = useState("");

  const handleReset = () => {
    setSearchNama("");
    setFilterSpesialis("");
  };

  useEffect(() => {
    document.title = "RS PKU Sruweng | Dokter Kami";
  }, []);
  useEffect(() => {
    document.title = "RS PKU Sruweng | Dokter Kami";
  }, []);

  const dokterFiltered = dokterList.filter((dokter) => {
    const matchNama = dokter.nama.toLowerCase().includes(searchNama.toLowerCase());

    const matchSpesialis = filterSpesialis ? dokter.spesialis === filterSpesialis : true;

    return matchNama && matchSpesialis;
  });

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
          <div className="lg:w-[80%] lg:mx-auto mx-2 text-slate-50 bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-500 lg:p-12 p-8 flex flex-col justify-center h-36 rounded-lg shadow-ku">
            <h1 className="lg:text-3xl text-2xl font-bold mb-1">Dokter Kami</h1>
            <div className="flex items-center gap-1 text-slate-200">
              <span>Beranda</span>
              <IoIosArrowForward />
              <span>Fasilitas</span>
            </div>
          </div>
        </div>

        {/* Cari */}
        <div className="lg:w-[60%] lg:mx-auto mx-2 bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-500 p-8 mt-8 rounded-xl shadow-ku">
          <p className="text-slate-50 text-lg font-semibold text-center mb-1">Cari Jadwal Dokter di RS PKU Muhammadiyah Sruweng</p>
          <p className="text-red-400 text-[11px] font-semibold text-center mb-3">*Jadwal dapat berubah sewaktu-waktu tergantung konfirmasi dokter</p>
          <form onSubmit={(e) => e.preventDefault()}>
            {/* Cari Nama Dokter */}

            {/* Pilih Spesialis */}
            <div className="grid grid-cols-2 lg:gap-5 gap-3">
              <div className="flex flex-col mb-3">
                <label className="text-white text-sm mb-1">Cari Dokter</label>
                <input type="text" placeholder="Cari nama dokter anda disini..." value={searchNama} onChange={(e) => setSearchNama(e.target.value)} className="px-4 py-1 rounded outline-none bg-white focus:ring-2 focus:ring-yellow-400" />
              </div>
              <div className="flex flex-col mb-5">
                <label className="text-white text-sm mb-1">Pilih Spesialis</label>
                <select value={filterSpesialis} onChange={(e) => setFilterSpesialis(e.target.value)} className="px-4 py-1 cursor-pointer rounded outline-none focus:ring-2 bg-white focus:ring-yellow-400">
                  <option value="">Semua Spesialis</option>
                  <option value="Spesialis Penyakit Dalam">Spesialis Penyakit Dalam</option>
                  <option value="Spesialis Bedah">Spesialis Bedah</option>
                  <option value="Spesialis Anak">Spesialis Anak</option>
                  <option value="Spesialis Paru">Spesialis Paru</option>
                  <option value="Spesialis Kandungan">Spesialis Kandungan</option>
                  <option value="Spesialis THT">Spesialis THT</option>
                  <option value="Spesialis Radiologi">Spesialis Radiologi</option>
                  <option value="Spesialis Saraf">Spesialis Saraf</option>
                  <option value="Spesialis Jantung">Spesialis Jantung</option>
                  <option value="Spesialis Mata">Spesialis Mata</option>
                  <option value="Spesialis Orthopedi">Spesialis Orthopedi</option>
                  <option value="Spesialis Urologi">Spesialis Urologi</option>
                  <option value="Spesialis Kulit & Kelamin">Spesialis Kulit & Kelamin</option>
                  <option value="Spesialis Rehab Medik">Spesialis Rehab Medik</option>
                  <option value="Patologi Klinik">Patologi Klinik</option>
                </select>
              </div>
            </div>

            {/* Tombol Cari */}
            <div className="flex items-end gap-3">
              <button type="submit" className="w-[30%] bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-600 text-white font-semibold text-[14px] lg:text-base py-1 cursor-pointer rounded hover:scale-[1.01] transition">
                Cari Dokter
              </button>

              <button type="button" onClick={handleReset} className="w-[30%] bg-slate-200 text-slate-800 font-semibold text-[14px] lg:text-base py-1 cursor-pointer rounded hover:bg-slate-300 transition">
                Reset
              </button>
            </div>
          </form>
        </div>
        <div className="space-y-6 pt-4">
          {dokterFiltered.map((dokter, index) => (
            <div key={index} className="lg:w-[80%] lg:mx-auto mx-2 bg-white/40 py-6 px-4 rounded-lg shadow-ku">
              <div className="flex flex-col lg:flex-row lg:gap-6 gap-3">
                {/* ================= FOTO (KIRI) ================= */}
                <div className="flex flex-col gap-2 items-center">
                  <div className="bg-white w-50 h-50 rounded-lg border-2 border-green-800 shadow-ku overflow-hidden flex justify-center items-center">
                    <img src={dokter.foto} alt={dokter.nama} className="h-40 w-40 object-cover" />
                  </div>
                </div>

                {/* ================= KONTEN (KANAN) ================= */}
                <div className="flex-1 flex-col justify-center lg:items-start">
                  {/* Info dasar */}
                  <div className="flex flex-col lg:items-start items-center">
                    <p className="font-semibold text-emerald-950 text-lg mb-1">{dokter.nama}</p>

                    <p className="inline-block bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-600 text-white rounded px-3 py-1 text-sm mb-3">{dokter.spesialis}</p>
                    <div className="mb-4">
                      <Link to="#" className="inline-flex items-center justify-center bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-600 text-white font-semibold py-1 px-4 rounded text-sm hover:scale-[1.02] transition">
                        Lihat Profil
                      </Link>
                    </div>
                  </div>

                  {/* ================= JADWAL ================= */}
                  {/* DESKTOP */}
                  <div className="hidden lg:block overflow-x-auto">
                    <table className="w-full border border-slate-300 text-sm text-center">
                      <thead className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-600 text-white">
                        <tr>
                          {["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"].map((hari) => (
                            <th key={hari} className="border px-2 py-3">
                              {hari}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        <tr className="hover:bg-slate-100">
                          {Object.values(dokter.jadwal).map((jam, i) => (
                            <td key={i} className="border px-2 py-2">
                              {jam}
                            </td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* MOBILE */}
                  <div className="lg:hidden grid grid-cols-2 gap-3 mt-4">
                    {Object.entries(dokter.jadwal).map(([hari, jam]) => (
                      <div key={hari} className="bg-white border border-green-700 rounded-lg p-3 shadow-sm">
                        <p className="text-sm font-semibold text-emerald-700 capitalize">{hari}</p>
                        <p className="text-sm text-slate-700 ">{jam}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DokterKami;
