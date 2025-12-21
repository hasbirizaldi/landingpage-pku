import { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { dataKarir } from "../api/data";

const Karir = () => {
  useEffect(() => {
    document.title = "RS PKU Sruweng | Karir";
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
          <div className="lg:w-[80%] lg:mx-auto mx-2 text-slate-50 bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-500 lg:p-12 p-8 flex flex-col justify-center h-36 rounded-lg shadow-ku sm:mb-8 mb-5">
            <h1 className="lg:text-3xl text-2xl font-bold mb-1">Karir</h1>
            <div className="flex items-center gap-1 text-slate-200">
              <span>Beranda</span>
              <IoIosArrowForward />
              <span>Karir</span>
            </div>
          </div>
          {/* <div className="lg:w-[80%] lg:mx-auto mx-2 bg-white/70 rounded-lg py-4 px-3 text-center shadow-ku">
            <h2 className="sm:text-2xl text-base font-semibold text-red-800 mb-2">Belum Ada Lowongan</h2>
            <p className="text-slate-600">Saat ini belum tersedia lowongan pekerjaan. </p>
            <p className="text-slate-600">Silakan kunjungi halaman ini secara berkala untuk informasi terbaru.</p>
          </div> */}
          <div className="grid lg:grid-cols-2 grid-cols-1 sm:gap-6 gap-4 lg:w-[80%] mx-2 lg:mx-auto ">
            {dataKarir.map((item, index) => (
              <div key={index} className=" bg-white/90 rounded-lg relative sm:p-8 p-6 shadow-ku">
                <h2 className="sm:text-xl text-lg font-bold bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-600 rounded py-1 text-white mb-2 text-center ">
                  <span className="mr-2">{item.jumlah}</span>
                  {item.posisi}
                </h2>
                <div className="mt-5 text-slate-800 lg:text-base text-sm">
                  {item.urgent ? <p className="text-red-700 font-semibold mb-1">Dibutuhkan Segera!</p> : <p className="font-semibold mb-1">Dibutuhkan!</p>}
                  <p>
                    {item.jumlah} {item.posisi} dengan persyaratan sebagai berikut :
                  </p>
                  <ol className="list-disc list-inside mt-2 ">
                    {item.persyaratan.map((syarat, index) => (
                      <li key={index}>{syarat}</li>
                    ))}
                  </ol>
                  <p className="text-red-700 font-semibold mt-3">Melampirkan</p>
                  <ol className="list-disc list-inside">
                    {item.berkas.map((berk, index) => (
                      <li key={index}>{berk}</li>
                    ))}
                  </ol>
                  <div className="flex justify-between items-center mt-14 font-semibold">
                    <p className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-600 text-white px-8 rounded hover:text-yellow-300 py-1.5 cursor-pointer hover:scale-[1.02] absolute left-8 bottom-4 lg:text-base text-sm">
                      Lamar
                    </p>
                    <div className="right-8 bottom-4 absolute lg:text-base text-sm">
                      <p className="text-red-700  ">Batas Pendaftaran:</p>
                      <p className="text-red-700  "> {item.batasPendaftaran}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Karir;
