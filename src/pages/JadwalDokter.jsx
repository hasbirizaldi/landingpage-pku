import axios from "axios";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { PiDotOutlineBold } from "react-icons/pi";
import { parseDate } from "../lib/helper";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";

const JadwalDokter = () => {
  const [jadwal, setJadwal] = useState(null);
  const [hasData, setHasData] = useState(true);

  const [tanggal, setTanggal] = useState('')
  const [tanggalApi, setTanggalApi] = useState("");


 const fetchData = async (selectedTanggal = null) => {
    const res = await axios.get(
      "https://brewokode.site/api/jadwal-polikliniks-public",
      {
        params: selectedTanggal ? { tanggal: selectedTanggal } : {},
      }
    );

    setTanggalApi(res.data.tanggal);

    if (res.data.data.length === 0) {
      setHasData(false);
      setJadwal(null);
    } else {
      setHasData(true);
      setJadwal(res.data.data[0]);
    }
  };



  useEffect(() => {
    document.title = "RS PKU Sruweng | Jadwal Poliklinik";

    fetchData(tanggal || null);
  }, [tanggal]); // ⬅️ PENTING


  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: "url('/5.jpg')", // pastikan di public
      }}
    >
      {/* overlay biar teks kebaca */}
      <div className="bg-white/60 min-h-screen pb-5">
        <div data-aos="fade-up" className="pt-4">
          <div className="lg:w-[80%] lg:mx-auto mx-2 text-slate-50  bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600 lg:p-12 p-8 flex flex-col justify-center h-36 rounded-lg shadow-ku">
            <h1 className="lg:text-2xl text-xl font-bold mb-1">Jadwal Poliklinik</h1>
            <div className="flex items-center gap-1 text-slate-200">
              <span>Beranda</span>
              <IoIosArrowForward />
              <span>Jadwal Poliklinik</span>
            </div>
          </div>
        </div>

        {/* Cari */}
        <div data-aos="fade-up" className="lg:w-[60%] lg:mx-auto mx-2  bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600 p-8 mt-8 rounded-lg sm:rounded-xl shadow-ku">
          <p className="text-slate-50 text-base sm:text-lg font-semibold text-center mb-4">Cari Jadwal Dokter di RS PKU Muhammadiyah Sruweng</p>
          

            <div className="flex justify-center lg:gap-10">
              <div className="flex flex-col mb-5 w-[90%] lg:w-[50%]">
                <label className="text-white text-sm mb-1 text-center">Pilih Tanggal</label>
                <input type="date" value={tanggal}
                  onChange={(e) => setTanggal(e.target.value)} className="px-4 py-1 rounded outline-none bg-white focus:ring-2 focus:ring-yellow-600 cursor-pointer" />
              </div>
            </div>

        </div>
        <div data-aos="fade-up" className="space-y-6 pt-4">
          <div className="lg:w-[85%] lg:mx-auto mx-2 bg-white/80 py-6 lg:px-10 px-2 rounded-lg shadow-ku">
            <div className="text-center lg:w-[50%] w-[80%] h-19 mx-auto  bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600 lg:shadow-ja shadow-jak py-2 rounded-full text-[#ffffff] flex flex-col items-center mb-2">
              <h2 className="lg:lg:text-3xl text-2xl text-xl font-bold text-[#ffffff]">Jadwal Poliklinik</h2>
              {tanggalApi && (
                <p className="text-[#ffffff] sm:text-base text-sm font-semibold">
                  {parseDate(tanggalApi).toLocaleDateString("id-ID", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              )}

            </div>
            <p className="text-[12px] mb-4 lg:mb-8 font-semibold text-center text-red-400 ">*Jadwal dapat berubah sewaktu-waktu tergantung konfirmasi dokter</p>
            {!hasData ? (
              <div className="text-center py-10 text-red-600 font-semibold text-xl">
                Mohon maaf jadwal belum tersedia
              </div>
            ):(

            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-8">
              {/* KIRI */}
              <div>
                 <div className="mb-5">
                    <h5 className=" bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600
                    font-semibold text-white px-8 py-1 rounded lg:shadow-ja shadow-jak mb-2 lg:text-lg text-sm">Spesialis Penyakit Dalam</h5>
                    <div className="flex items-center justify-between pr-4 font-semibold">
                      <p className="flex items-center text-slate-800 text-sm lg:text-base">
                        <PiDotOutlineBold className="lg:text-3xl text-2xl" />
                        <span>dr. Khoerul Anwar, Sp.PD</span>
                      </p>

                      <p
                        className={
                          jadwal?.anwar
                            ? "text-slate-800 text-sm lg:text-base"
                            : "text-red-600 text-sm lg:text-base"
                        }
                      >
                        {jadwal?.anwar || "Tidak Praktik"}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pr-4 font-semibold">
                      <p className="flex items-center text-slate-800 text-sm lg:text-base">
                        <PiDotOutlineBold className="lg:text-3xl text-2xl" />
                        <span>dr. Khayati Handayani, Sp.PD</span>
                      </p>

                      <p
                        className={
                          jadwal?.khayati
                            ? "text-slate-800 text-sm lg:text-base"
                            : "text-red-600 text-sm lg:text-base"
                        }
                      >
                        {jadwal?.khayati || "Tidak Praktik"}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pr-4 font-semibold">
                      <p className="flex items-center text-slate-800 text-sm lg:text-base">
                        <PiDotOutlineBold className="lg:text-3xl text-2xl" />
                        <span>dr. Haryono Yuniarto, Sp.PD-KGH</span>
                      </p>

                      <p
                        className={
                          jadwal?.haryono
                            ? "text-slate-800 text-sm lg:text-base"
                            : "text-red-600 text-sm lg:text-base"
                        }
                      >
                        {jadwal?.haryono || "Tidak Praktik"}
                      </p>
                    </div>
                  </div>

                  <div  className="mb-5">
                    <h5 className=" bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600
                    font-semibold text-white px-8 py-1 rounded lg:shadow-ja shadow-jak mb-2 lg:text-lg text-sm">Spesialis Bedah</h5>
                    <div className="flex items-center justify-between pr-4 font-semibold">
                      <p className="flex items-center text-slate-800 text-sm lg:text-base">
                        <PiDotOutlineBold className="lg:text-3xl text-2xl" />
                        <span>dr. Ricky Dwi Nur Tyastono, Sp.B</span>
                      </p>

                      <p
                        className={
                          jadwal?.ricky
                            ? "text-slate-800 text-sm lg:text-base"
                            : "text-red-600 text-sm lg:text-base"
                        }
                      >
                        {jadwal?.ricky || "Tidak Praktik"}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pr-4 font-semibold">
                      <p className="flex items-center text-slate-800 text-sm lg:text-base">
                        <PiDotOutlineBold className="lg:text-3xl text-2xl" />
                        <span>dr. Adi Purnomo, Sp.B</span>
                      </p>

                      <p
                        className={
                          jadwal?.adi
                            ? "text-slate-800 text-sm lg:text-base"
                            : "text-red-600 text-sm lg:text-base"
                        }
                      >
                        {jadwal?.adi || "Tidak Praktik"}
                      </p>
                    </div>
                  </div>

                  <div  className="mb-5">
                    <h5 className=" bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600
                    font-semibold text-white px-8 py-1 rounded lg:shadow-ja shadow-jak mb-2 lg:text-lg text-sm">Spesialis Anak</h5>
                    <div className="flex items-center justify-between pr-4 font-semibold">
                      <p className="flex items-center text-slate-800 text-sm lg:text-base">
                        <PiDotOutlineBold className="lg:text-3xl text-2xl" />
                        <span>dr. Dyah Ayu Wulansari, M.Sc., Sp.A</span>
                      </p>

                      <p
                        className={
                          jadwal?.saria
                            ? "text-slate-800 text-sm lg:text-base"
                            : "text-red-600 text-sm lg:text-base"
                        }
                      >
                        {jadwal?.saria || "Tidak Praktik"}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pr-4 font-semibold">
                      <p className="flex items-center text-slate-800 text-sm lg:text-base">
                        <PiDotOutlineBold className="lg:text-3xl text-2xl" />
                        <span>dr. M. Jalul Mutaqorrib, M.Med.Sc., Sp.A</span>
                      </p>

                      <p
                        className={
                          jadwal?.jalul
                            ? "text-slate-800 text-sm lg:text-base"
                            : "text-red-600 text-sm lg:text-base"
                        }
                      >
                        {jadwal?.jalul || "Tidak Praktik"}
                      </p>
                    </div>
                  </div>

                  <div  className="mb-5">
                    <h5 className=" bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600
                    font-semibold text-white px-8 py-1 rounded lg:shadow-ja shadow-jak mb-2 lg:text-lg text-sm">Spesialis Paru</h5>
                     <div className="flex items-center justify-between pr-4 font-semibold">
                      <p className="flex items-center text-slate-800 text-sm lg:text-base">
                        <PiDotOutlineBold className="lg:text-3xl text-2xl" />
                        <span>dr. Inet Fyndiannne M, Sp. P</span>
                      </p>

                      <p
                        className={
                          jadwal?.inet
                            ? "text-slate-800 text-sm lg:text-base"
                            : "text-red-600 text-sm lg:text-base"
                        }
                      >
                        {jadwal?.inet || "Tidak Praktik"}
                      </p>
                    </div>
                  </div>

                  <div  className="mb-5">
                    <h5 className=" bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600
                    font-semibold text-white px-8 py-1 rounded lg:shadow-ja shadow-jak mb-2 lg:text-lg text-sm">Spesialis Kandungan</h5>
                     <div className="flex items-center justify-between pr-4 font-semibold">
                      <p className="flex items-center text-slate-800 text-sm lg:text-base">
                        <PiDotOutlineBold className="lg:text-3xl text-2xl" />
                        <span>dr. Deyna Primavita P., Sp.OG(K)-KFM</span>
                      </p>

                      <p
                        className={
                          jadwal?.levi
                            ? "text-slate-800 text-sm lg:text-base"
                            : "text-red-600 text-sm lg:text-base"
                        }
                      >
                        {jadwal?.levi || "Tidak Praktik"}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pr-4 font-semibold">
                      <p className="flex items-center text-slate-800 text-sm lg:text-base">
                        <PiDotOutlineBold className="lg:text-3xl text-2xl" />
                        <span>dr. Syaiful Alam, Sp.OG</span>
                      </p>

                      <p
                        className={
                          jadwal?.alam
                            ? "text-slate-800 text-sm lg:text-base"
                            : "text-red-600 text-sm lg:text-base"
                        }
                      >
                        {jadwal?.alam || "Tidak Praktik"}
                      </p>
                    </div>
                  </div>

                  <div  className="mb-5">
                    <h5 className=" bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600
                    font-semibold text-white px-8 py-1 rounded lg:shadow-ja shadow-jak mb-2 lg:text-lg text-sm">Spesialis THT</h5>
                    <div className="flex items-center justify-between pr-4 font-semibold">
                      <p className="flex items-center text-slate-800 text-sm lg:text-base">
                        <PiDotOutlineBold className="lg:text-3xl text-2xl" />
                        <span>dr. Windy Rizkiana, Sp.THT-KL</span>
                      </p>

                      <p
                        className={
                          jadwal?.windy
                            ? "text-slate-800 text-sm lg:text-base"
                            : "text-red-600 text-sm lg:text-base"
                        }
                      >
                        {jadwal?.windy || "Tidak Praktik"}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pr-4 font-semibold">
                      <p className="flex items-center text-slate-800 text-sm lg:text-base">
                        <PiDotOutlineBold className="lg:text-3xl text-2xl" />
                        <span>dr. Yayan Mitayani, Sp.THT-KL</span>
                      </p>

                      <p
                        className={
                          jadwal?.yayan
                            ? "text-slate-800 text-sm lg:text-base"
                            : "text-red-600 text-sm lg:text-base"
                        }
                      >
                        {jadwal?.yayan || "Tidak Praktik"}
                      </p>
                    </div>
                  </div>

                  <div  className="mb-5">
                    <h5 className=" bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600
                    font-semibold text-white px-8 py-1 rounded lg:shadow-ja shadow-jak mb-2 lg:text-lg text-sm">Spesialis Radiologi</h5>
                     <div className="flex items-center justify-between pr-4 font-semibold">
                      <p className="flex items-center text-slate-800 text-sm lg:text-base">
                        <PiDotOutlineBold className="lg:text-3xl text-2xl" />
                        <span>dr. Vida Berry Al Aden, Sp.Rad</span>
                      </p>

                      <p
                        className={
                          jadwal?.vida
                            ? "text-slate-800 text-sm lg:text-base"
                            : "text-red-600 text-sm lg:text-base"
                        }
                      >
                        {jadwal?.vida || "Tidak Praktik"}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pr-4 font-semibold">
                      <p className="flex items-center text-slate-800 text-sm lg:text-base">
                        <PiDotOutlineBold className="lg:text-3xl text-2xl" />
                        <span>dr. Iwan Danardono, Sp.Rad</span>
                      </p>

                      <p
                        className={
                          jadwal?.iwan
                            ? "text-slate-800 text-sm lg:text-base"
                            : "text-red-600 text-sm lg:text-base"
                        }
                      >
                        {jadwal?.iwan || "Tidak Praktik"}
                      </p>
                    </div>
                  </div>
                  <div className="border-3 lg:block hidden border-green-800 py-2 px-6 rounded-xl w-[300px] mb-6">
                    <p className="font-bold text-red-600">Pelayanan 24 jam</p>
                    <div className="font-semibold">
                      <span className="flex items-center"><PiDotOutlineBold className="text-2xl"/>IGD</span>
                      <span className="flex items-center"><PiDotOutlineBold className="text-2xl"/>Laboratorium</span>
                      <span className="flex items-center"><PiDotOutlineBold className="text-2xl"/>Farmasi</span>
                      <span className="flex items-center"><PiDotOutlineBold className="text-2xl"/>Radiologi</span>
                      <span className="flex items-center"><PiDotOutlineBold className="text-2xl"/>Ambulance</span>
                    </div>
                  </div>
                   <div className=" mb-6 lg:block hidden">
                    <p className="font-bold mb-1">Pendaftaran Pasien Umum & Asuransi Non-JKN</p>
                    <Link to="https://wa.me/6282241997117?text=Assalamualaikum%20RS%20PKU%20Sruweng" target="_blank" className="font-semibold ">
                      <span className="flex items-center gap-1 text-xl"><IoLogoWhatsapp className="lg:text-3xl text-2xl text-green-700"/>
                      <span className="text-blue-500 underline">0822 4199 7117</span></span>
                    </Link>
                  </div>
              </div>
              
              {/* KANAN */}
              <div>
                 <div  className="mb-5">
                    <h5 className=" bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600
                    font-semibold text-white px-8 py-1 rounded lg:shadow-ja shadow-jak mb-2 lg:text-lg text-sm">Spesialis Saraf</h5>
                    <div className="flex items-center justify-between pr-4 font-semibold">
                      <p className="flex items-center text-slate-800 text-sm lg:text-base">
                        <PiDotOutlineBold className="lg:text-3xl text-2xl" />
                        <span>dr. Khalifa Rahmani, Sp.N</span>
                      </p>

                      <p
                        className={
                          jadwal?.khalifa
                            ? "text-slate-800 text-sm lg:text-base"
                            : "text-red-600 text-sm lg:text-base"
                        }
                      >
                        {jadwal?.khalifa || "Tidak Praktik"}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pr-4 font-semibold">
                      <p className="flex items-center text-slate-800 text-sm lg:text-base">
                        <PiDotOutlineBold className="lg:text-3xl text-2xl" />
                        <span>dr. Tri Hastuti H, Sp.S</span>
                      </p>

                      <p
                        className={
                          jadwal?.tri
                            ? "text-slate-800 text-sm lg:text-base"
                            : "text-red-600 text-sm lg:text-base"
                        }
                      >
                        {jadwal?.tri || "Tidak Praktik"}
                      </p>
                    </div>
                  </div>

                   <div  className="mb-5">
                      <h5 className=" bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600
                      font-semibold text-white px-8 py-1 rounded lg:shadow-ja shadow-jak mb-2 lg:text-lg text-sm">Spesialis Jantung</h5>
                      <div className="flex items-center justify-between pr-4 font-semibold">
                        <p className="flex items-center text-slate-800 text-sm lg:text-base">
                          <PiDotOutlineBold className="lg:text-3xl text-2xl" />
                          <span>dr. Sari Rahayu Dwi Utami, Sp.JP</span>
                        </p>

                        <p
                          className={
                            jadwal?.sarijan
                              ? "text-slate-800 text-sm lg:text-base"
                              : "text-red-600 text-sm lg:text-base"
                          }
                        >
                          {jadwal?.sarijan || "Tidak Praktik"}
                        </p>
                    </div>
                  </div>

                   <div  className="mb-5">
                      <h5 className=" bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600
                      font-semibold text-white px-8 py-1 rounded lg:shadow-ja shadow-jak mb-2 lg:text-lg text-sm">Spesialis Mata</h5>
                      <div className="flex items-center justify-between pr-4 font-semibold">
                        <p className="flex items-center text-slate-800 text-sm lg:text-base">
                          <PiDotOutlineBold className="lg:text-3xl text-2xl" />
                          <span>dr. Inkoni Novitasari, Sp. M</span>
                        </p>

                        <p
                          className={
                            jadwal?.inkoni
                              ? "text-slate-800 text-sm lg:text-base"
                              : "text-red-600 text-sm lg:text-base"
                          }
                        >
                          {jadwal?.inkoni || "Tidak Praktik"}
                        </p>
                      </div>
                  </div>

                   <div  className="mb-5">
                    <h5 className=" bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600
                    font-semibold text-white px-8 py-1 rounded lg:shadow-ja shadow-jak mb-2 lg:text-lg text-sm">Spesialis Orthopedi</h5>
                    <div className="flex items-center justify-between pr-4 font-semibold">
                        <p className="flex items-center text-slate-800 text-sm lg:text-base">
                          <PiDotOutlineBold className="lg:text-3xl text-2xl" />
                          <span>dr. M. Abdul Aziz, Sp.OT</span>
                        </p>

                        <p
                          className={
                            jadwal?.aziz
                              ? "text-slate-800 text-sm lg:text-base"
                              : "text-red-600 text-sm lg:text-base"
                          }
                        >
                          {jadwal?.aziz || "Tidak Praktik"}
                        </p>
                    </div>
                  </div>

                   <div  className="mb-5">
                    <h5 className=" bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600
                    font-semibold text-white px-8 py-1 rounded lg:shadow-ja shadow-jak mb-2 lg:text-lg text-sm">Spesialis Urologi</h5>
                    <div className="flex items-center justify-between pr-4 font-semibold">
                        <p className="flex items-center text-slate-800 text-sm lg:text-base">
                          <PiDotOutlineBold className="lg:text-3xl text-2xl" />
                          <span>dr. Andreas Pramudito, Sp. U</span>
                        </p>

                        <p
                          className={
                            jadwal?.andreas
                              ? "text-slate-800 text-sm lg:text-base"
                              : "text-red-600 text-sm lg:text-base"
                          }
                        >
                          {jadwal?.andreas || "Tidak Praktik"}
                        </p>
                    </div>
                  </div>

                   <div  className="mb-5">
                    <h5 className=" bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600
                    font-semibold text-white px-8 py-1 rounded lg:shadow-ja shadow-jak mb-2 lg:text-lg text-sm">Spesialis Kulit & Kelamin</h5>
                    <div className="flex items-center justify-between pr-4 font-semibold">
                        <p className="flex items-center text-slate-800 text-sm lg:text-base">
                          <PiDotOutlineBold className="lg:text-3xl text-2xl" />
                          <span>dr. Ahmad Satya Negara, Sp.D.V</span>
                        </p>

                        <p
                          className={
                            jadwal?.satya
                              ? "text-slate-800 text-sm lg:text-base"
                              : "text-red-600 text-sm lg:text-base"
                          }
                        >
                          {jadwal?.satya || "Tidak Praktik"}
                        </p>
                    </div>
                  </div>

                   <div  className="mb-5">
                    <h5 className=" bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600
                    font-semibold text-white px-8 py-1 rounded lg:shadow-ja shadow-jak mb-2 lg:text-lg text-sm">Spesialis Rehab Medik</h5>
                    <div className="flex items-center justify-between pr-4 font-semibold">
                        <p className="flex items-center text-slate-800 text-sm lg:text-base">
                          <PiDotOutlineBold className="lg:text-3xl text-2xl" />
                          <span>dr.Andi Sulistyo Nugroho, Sp. KFR</span>
                        </p>

                        <p
                          className={
                            jadwal?.andy
                              ? "text-slate-800 text-sm lg:text-base"
                              : "text-red-600 text-sm lg:text-base"
                          }
                        >
                          {jadwal?.andy || "Tidak Praktik"}
                        </p>
                    </div>
                    <div className="flex items-center justify-between pr-4 font-semibold">
                      <p className="flex items-center text-slate-800 text-sm lg:text-base">
                        <PiDotOutlineBold className="lg:text-3xl text-2xl" />
                        <span>Fisioterapi</span>
                      </p>

                      <p
                        className={
                          jadwal?.fisio
                            ? "text-slate-800 text-sm lg:text-base"
                            : "text-red-600 text-sm lg:text-base"
                        }
                      >
                        {jadwal?.fisio || "Tidak Praktik"}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pr-4 font-semibold">
                      <p className="flex items-center text-slate-800 text-sm lg:text-base">
                        <PiDotOutlineBold className="lg:text-3xl text-2xl" />
                        <span>Terapi Wicara & Okupasi</span>
                      </p>

                      <p
                        className={
                          jadwal?.wicara
                            ? "text-slate-800 text-sm lg:text-base"
                            : "text-red-600 text-sm lg:text-base"
                        }
                      >
                        {jadwal?.wicara || "Tidak Praktik"}
                      </p>
                    </div>
                  </div>

                   <div  className="mb-5">
                    <h5 className=" bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600
                    font-semibold text-white px-8 py-1 rounded lg:shadow-ja shadow-jak mb-2 lg:text-lg text-sm">Klinik Vaksinasi Internasional</h5>
                    <div className="flex items-center justify-between pr-4 font-semibold">
                      <p className="flex items-center text-slate-800 text-sm lg:text-base">
                        <PiDotOutlineBold className="lg:text-3xl text-2xl" />
                      </p>

                      <p
                        className={
                          jadwal?.vaksinasi
                            ? "text-slate-800 text-sm lg:text-base"
                            : "text-red-600 text-sm lg:text-base"
                        }
                      >
                        {jadwal?.vaksinasi || "Tidak Praktik"}
                      </p>
                    </div>
                  </div>

                   <div  className="mb-5">
                    <h5 className=" bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600
                    font-semibold text-white px-8 py-1 rounded lg:shadow-ja shadow-jak mb-2 lg:text-lg text-sm">Spesialis Patologi Klinik</h5>
                    <div className="flex items-center justify-between pr-4 font-semibold">
                      <p className="flex items-center text-slate-800 text-sm lg:text-base">
                        <PiDotOutlineBold className="lg:text-3xl text-2xl" />
                        <span>dr. Desi Widiyanti, Sp.PK</span>
                      </p>

                      <p
                        className={
                          jadwal?.desi
                            ? "text-slate-800 text-sm lg:text-base"
                            : "text-red-600 text-sm lg:text-base"
                        }
                      >
                        {jadwal?.desi || "Tidak Praktik"}
                      </p>
                    </div>
                  </div>

                   <div  className="mb-5">
                    <h5 className=" bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600
                    font-semibold text-white px-8 py-1 rounded lg:shadow-ja shadow-jak mb-2 lg:text-lg text-sm">Klinik Gizi</h5>
                    <div className="flex items-center justify-between pr-4 font-semibold">
                      <p className="flex items-center text-slate-800 text-sm lg:text-base">
                        <PiDotOutlineBold className="lg:text-3xl text-2xl" />
                      </p>

                      <p
                        className={
                          jadwal?.gizi
                            ? "text-slate-800 text-sm lg:text-base"
                            : "text-red-600 text-sm lg:text-base"
                        }
                      >
                        {jadwal?.gizi || "Tidak Praktik"}
                      </p>
                    </div>
                  </div>

              </div>
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JadwalDokter;
