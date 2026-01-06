import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { PiDotOutlineBold } from "react-icons/pi";
import { jadwalDokter } from "../api/data";

const JadwalDokter = () => {
  const [searchNama, setSearchNama] = useState("");
  const [filterSpesialis, setFilterSpesialis] = useState("");

  useEffect(() => {
    document.title = "RS PKU Sruweng | Jadwal Dokter";
  }, []);

  const filteredJadwal = jadwalDokter
    .map((item) => {
      // filter spesialis
      if (filterSpesialis && item.spesialis !== filterSpesialis) {
        return null;
      }

      // filter dokter berdasarkan nama
      const dokterFiltered = item.dokter.filter((d) => d.nama.toLowerCase().includes(searchNama.toLowerCase()));

      if (dokterFiltered.length === 0) return null;

      return {
        ...item,
        dokter: dokterFiltered,
      };
    })
    .filter(Boolean);

  const LEFT_COUNT = 7;

  const leftColumn = filteredJadwal.slice(0, LEFT_COUNT);
  const rightColumn = filteredJadwal.slice(LEFT_COUNT);

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
        <div className="lg:w-[60%]  lg:mx-auto mx-2 bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-500 p-8 mt-8 rounded-xl shadow-ku">
          <p className="text-slate-50 text-base sm:text-lg font-semibold text-center mb-1">Cari Jadwal Dokter di RS PKU Muhammadiyah Sruweng</p>
          <p className="text-[11px] font-semibold text-center mb-3 text-red-400 ">*Jadwal dapat berubah sewaktu-waktu tergantung konfirmasi dokter</p>
          <form onSubmit={(e) => e.preventDefault()}>
            {/* Cari Nama Dokter */}
            <div className="flex flex-col mb-3">
              <label className="text-white text-sm mb-1">Cari Dokter</label>
              <input type="text" placeholder="Cari nama dokter anda disini..." value={searchNama} onChange={(e) => setSearchNama(e.target.value)} className="px-4 py-1 rounded outline-none bg-white focus:ring-2 focus:ring-yellow-400" />
            </div>

            {/* Pilih Spesialis */}
            <div className="grid lg:grid-cols-2 lg:gap-10">
              <div className="flex flex-col lg:mb-5 mb-3">
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
                  <option value="Klinik Vaksinasi Internasional">Klinik Vaksinasi Internasional</option>
                  <option value="Spesialis Patologi Klinik">Spesialis Patologi Klinik</option>
                  <option value="Klinik Gizi">Klinik Gizi</option>
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
          <div className="lg:w-[85%] lg:mx-auto mx-2 bg-white/80 py-6 lg:px-10 px-2 rounded-lg shadow-ku">
            <div className="text-center lg:w-[50%] w-[80%] mx-auto bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-500 lg:shadow-ja shadow-jak py-2 rounded-full text-[#ffffff] flex flex-col items-center mb-10">
              <h2 className="lg:text-3xl text-xl font-bold text-[#ffffff]">Jadwal Poliklinik</h2>
              <p className="text-[#ffffff] sm:text-base text-sm font-semibold">Hari Sabtu, 13 Desember 2025</p>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-8">
              {/* KIRI */}
              <div>
                {leftColumn.map((item, i) => (
                  <div key={i} className="mb-6">
                    <h4
                      className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-500 
          font-semibold text-white px-8 py-1 rounded lg:shadow-ja shadow-jak mb-2 lg:text-base text-sm"
                    >
                      {item.spesialis}
                    </h4>

                    {item.dokter.map((d, idx) => (
                      <div key={idx} className="flex justify-between">
                        <div className="flex items-center">
                          <PiDotOutlineBold className="lg:text-4xl text-xl" />
                          <p className="font-semibold lg:text-sm text-[11px]">{d.nama}</p>
                        </div>
                        <p className={`flex items-center font-semibold lg:text-sm text-[11px] ${d.status == false ? "text-red-600" : ""}`}>{d.jam}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* KANAN */}
              <div>
                {rightColumn.map((item, i) => (
                  <div key={i} className="mb-6">
                    <h4
                      className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-500 
          font-semibold text-white px-8 py-1 rounded lg:shadow-ja shadow-jak mb-2 lg:text-base text-sm"
                    >
                      {item.spesialis}
                    </h4>

                    {item.dokter.map((d, idx) => (
                      <div key={idx} className="flex justify-between lg:mx-2 mb-1">
                        <div className="flex items-center lg:gap-1">
                          <PiDotOutlineBold className="lg:text-4xl text-xl" />
                          <p className="font-semibold lg:text-sm text-[11px]">{d.nama}</p>
                        </div>
                        <p className={`flex items-center font-semibold lg:text-sm text-[11px] ${d.status == false ? "text-red-600" : ""}`}>{d.jam}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JadwalDokter;
