import { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { dokterList, img } from "../api/data";
import { Link } from "react-router-dom";

const JadwalDokter = () => {
  useEffect(() => {
    document.title = "RS PKU Sruweng | Jadwal Dokter";
  }, []);

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
            <h1 className="lg:text-3xl text-2xl font-bold mb-1">Jadwal Dokter</h1>
            <div className="flex items-center gap-1 text-slate-200">
              <span>Beranda</span>
              <IoIosArrowForward />
              <span>Jadwal Dokter</span>
            </div>
          </div>
        </div>

        {/* Cari */}
        <div className="lg:w-[60%] lg:mx-auto mx-2 bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-500 p-8 mt-8 rounded-xl shadow-ku">
          <p className="text-slate-50 text-lg font-semibold text-center mb-1">Cari Jadwal Dokter di RS PKU Muhammadiyah Sruweng</p>
          <p className="text-slate-50 text-[11px] font-semibold text-center mb-3">*Jadwal dapat berubah sewaktu-waktu. Informasi terupdate silakan menghubungi WA Pendaftaran : 08xx xxxx xxxx </p>
          <form className="">
            {/* Cari Nama Dokter */}
            <div className="flex flex-col mb-3">
              <label className="text-white text-sm mb-1">Cari Dokter</label>
              <input type="text" placeholder="Cari nama dokter anda disini..." className="px-4 py-1 rounded outline-none bg-white focus:ring-2 focus:ring-yellow-400" />
            </div>

            {/* Pilih Spesialis */}
            <div className="grid grid-cols-2 lg:gap-10 gap-3">
              <div className="flex flex-col mb-5">
                <label className="text-white text-sm mb-1">Pilih Spesialis</label>
                <select className="px-4 py-1 cursor-pointer rounded outline-none focus:ring-2 bg-white focus:ring-yellow-400">
                  <option value="">Semua Spesialis</option>
                  <option value="umum">Dokter Umum</option>
                  <option value="anak">Spesialis Anak</option>
                  <option value="kandungan">Spesialis Kandungan</option>
                  <option value="penyakit-dalam">Penyakit Dalam</option>
                  <option value="bedah">Bedah</option>
                </select>
              </div>
              <div className="flex flex-col mb-5">
                <label className="text-white text-sm mb-1">Pilih Tanggal</label>
                <input type="date" placeholder="Cari nama dokter anda disini..." className="px-4 py-1 rounded outline-none bg-white focus:ring-2 focus:ring-yellow-400 cursor-pointer" />
              </div>
            </div>

            {/* Tombol Cari */}
            <div className="flex items-end">
              <button type="submit" className="w-[30%] bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-600 text-white font-semibold text-[14px] lg:text-base py-1 cursor-pointer rounded hover:scale-[1.01] transition">
                Cari Dokter
              </button>
            </div>
          </form>
        </div>
        <div className="space-y-6 pt-4">
          {dokterList.map((dokter, index) => (
            <div key={index} className="lg:w-[80%] text-slate-800 lg:mx-auto mx-2 bg-white/80 py-6 px-4 rounded-lg shadow-ku">
              <div className="grid lg:grid-cols-[2fr_3fr_8fr] grid-cols-1 gap-4">
                {/* Foto */}
                <div className="flex justify-center">
                  <div className="bg-white rounded-full border-2 border-green-800 shadow-ku overflow-hidden">
                    <img src={img[8]} alt={dokter.nama} className="h-40" />
                  </div>
                </div>

                {/* Info */}
                <div className="flex flex-col justify-center lg:items-start items-center">
                  <p className="font-semibold mb-1">{dokter.nama}</p>
                  <p className="bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-600 w-fit text-white rounded px-2 mb-4">{dokter.spesialis}</p>
                  <Link to="#" className="flex items-center justify-center bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-600 text-white font-semibold py-1 rounded w-32 hover:scale-[1.02] transition">
                    Lihat Profil
                  </Link>
                </div>

                {/* Jadwal */}
                <div>
                  {/* ================= DESKTOP (TABLE) ================= */}
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

                  {/* ================= MOBILE (LIST) ================= */}
                  <div className="lg:hidden grid grid-cols-2 gap-3 mt-4">
                    {Object.entries(dokter.jadwal).map(([hari, jam]) => (
                      <div key={hari} className="bg-white border border-green-700 rounded-lg p-3 shadow-sm">
                        <p className="text-xs font-semibold text-emerald-700 capitalize mb-1">{hari}</p>
                        <p className="text-sm text-slate-700">{jam}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <p className="text-center">Paginasi disini!</p>
        </div>
      </div>
    </div>
  );
};

export default JadwalDokter;
