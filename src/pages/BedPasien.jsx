import { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { dataBangsal } from "../api/data";

const BedPasien = () => {
  const totalBed = dataBangsal.reduce((acc, item) => acc + item.jumlah, 0);
  useEffect(() => {
    document.title = "RS PKU Sruweng | Bed Pasien";
  }, []);
  return (
    <div
    className="min-h-screen bg-fixed bg-cover bg-center"
    style={{ backgroundImage: "url('/5.jpg')" }}
    >
      <div className="bg-white/60 min-h-screen pb-6">

        {/* ================= HEADER ================= */}
        <div className="pt-4">
          <div className="lg:w-[80%] lg:mx-auto mx-2  bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600 lg:px-12 lg:py-10 p-8 rounded-lg shadow-ku text-white">
            <h1 className="lg:text-2xl text-xl font-bold mb-1">
             Bed Pasien
            </h1>
            <div className="flex items-center gap-1 text-slate-200">
              <span>Beranda</span>
              <IoIosArrowForward />
              <span>Fasilitas</span>
            </div>
          </div>

           {/* ================= CONTENT ================= */}
        <div className="lg:w-[80%] lg:mx-auto mx-2 mt-8 bg-white/60 py-8 sm:px-6 px-2 rounded-lg shadow-ku">
          
          {/* Total Bed */}
          <div className=" flex flex-col font-bold text-center text-xl sm:text-3xl text-green-900">
            <h2 className=" flex flex-col">
              <span>Total Bed Pasien</span> 
              <span>RS PKU Muhammadiyah Sruweng</span>
            </h2>
          </div>
          <div className="h-[3px] w-[90%] lg:w-160 mx-auto bg-gradient-to-r from-emerald-800 via-emerald-600 to-emerald-500 mb-8 sm:mb-10 sm:mt-2 mt-0"></div>

          {/* Grid Bangsal */}
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 ">
            {dataBangsal.map((bangsal, index) => (
              <div
                key={index}
                className="bg-white rounded-lg cursor-pointer hover:scale-101 shadow-md overflow-hidden hover:shadow-xl transition duration-300 pb-4 border-2 border-emerald-800" data-aos="fade-up"
              >
                <img
                  src={bangsal.img}
                  alt={bangsal.nama}
                  className="w-full sm:h-70 object-cover"
                />

                <div className="px-10 mt-2">
                  <h3 className="text-lg text-center font-semibold text-white bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-700 rounded py-1">
                    {bangsal.nama}
                  </h3>
                  <p className="text-5xl font-bold text-emerald-800 mt-2 flex flex-col justify-center items-center" data-aos="flip-right">
                   <span> {bangsal.jumlah}</span> <span className="text-lg">Bed Pasien</span>
                  </p>
                </div>
              </div>
            ))}

          </div>
          <div data-aos="fade-up" className="flex-flex-col mt-10 bg-white shadow-md rounded-lg pb-6 overflow-hidden font-bold">
            <p className="text-xl flex flex-col items-center bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-700 py-2 text-white">Total Bed</p>
            <p data-aos="flip-right" className=" flex flex-col my-2 items-center text-emerald-800"><span className="text-5xl">{totalBed}</span> <span className="text-xl">Bed Pasien</span></p>
          </div>

        </div>
      </div>
    </div>
    
    </div>
  );
};

export default BedPasien;
