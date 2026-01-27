import { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";

const Falsafah = () => {
  useEffect(() => {
    document.title = "RS PKU Sruweng | Falsafah Visi & Misi";
  }, []);
  return (
    <div className="bg-slate-100 pt-4 min-h-screen">
      <div className="lg:w-[80%] lg:mx-auto mx-2 text-white bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-500 lg:p-12 p-8 lg:h-36 h-30 rounded-lg shadow-ku mb-6">
        <h1 className="lg:text-2xl text-xl font-bold mb-1">Falsafah Visi & Misi</h1>
        <div className="flex lg:text-base text-sm items-center gap-1 text-slate-200">
          <span>Beranda</span>
          <IoIosArrowForward />
          <span>Falsafah Visi & Misi</span>
        </div>
      </div>
       <div className="bg-white/60 lg:w-[90%] mx-2 lg:mx-auto mt-8 sm:p-8 py-8 px-4 rounded-xl shadow-ku">
          <p className="flex flex-col font-bold text-center text-xl sm:text-3xl text-green-900">
            <span>Falsafah Visi & Misi</span>
          </p>
          <div className="h-[3px] w-[80%] lg:w-120 mx-auto bg-gradient-to-r from-emerald-800 via-emerald-600 to-emerald-500 mb-8 sm:mb-10 sm:mt-2 mt-0"></div>
          <div className="flex flex-col sm:gap-5 gap-4">
           <div className="mb-5">
            <h1 className="text-lg sm:text-2xl font-semibold" >Falsafah</h1>
            <ul className="list-disc sm:text-base text-sm pl-5">
              <li>Sarana dakwah Islam melalui Muhammadiyah</li>
              <li>Amal usaha Muhammadiyah bidang kesehatan berbasis Social Profit Oriented</li>
            </ul>
           </div>
           <div className="mb-5">
            <h1 className="text-lg sm:text-2xl font-semibold">Visi</h1>
            <p className="sm:text-base text-sm">Rumah Sakit PKU Muhammadiyah Sruweng menjadi Rumah Sakit pilihan utama di Kebumen yang memberikan pelayanan prima dan Islami dengan berorientasi pada kepuasan pelanggan</p>
           </div>
           <div className="mb-5">
            <h1 className="text-lg sm:text-2xl font-semibold">Misi</h1>
            <ul className="list-disc sm:text-base text-sm pl-5">
              <li>Mengembangkan pelayanan kesehatan yang komprehensif baik fisik, jiwa maupun spritual untuk mewujudkan pelayanan yang prima.</li>
              <li>Meningkatkan sumber daya insani yang kompeten dan Islami</li>
              <li>Mewujudkan pelayanan yang berorientasi pada kepuasan pelanggan</li>
            </ul>
           </div>
          
          </div>
        </div>
    </div>
  );
};

export default Falsafah;
