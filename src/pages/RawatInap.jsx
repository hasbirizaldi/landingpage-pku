import { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";

const RawatInap = () => {
  useEffect(() => {
    document.title = "RS PKU Sruweng | Rawat Inap";
  }, []);
  return (
    <div className="bg-slate-100 pt-4 min-h-screen">
      <div className="lg:w-[80%] text-slate-50 mx-auto bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600 p-12 flex items-start justify-center flex-col h-36 rounded-lg">
        <h1 className="text-3xl font-bold mb-1">Rawat Inap</h1>
        <div className="flex items-center gap-1 text-slate-200">
          <span>Home</span>
          <span>
            <IoIosArrowForward />
          </span>
          <span>Jadwal Dokter</span>
        </div>
      </div>
    </div>
  );
};

export default RawatInap;
