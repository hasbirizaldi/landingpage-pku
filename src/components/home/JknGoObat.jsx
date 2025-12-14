import { Link } from "react-router-dom";
import { img } from "../../api/data";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { FaCloudDownloadAlt } from "react-icons/fa";

const JknGoObat = () => {
  return (
    <div className="grid grid-cols-2  py-10 px-60">
      <div className="flex flex-col  items-start">
        <div className="font-semibold">
          <p className="text-xl">Pelayanan Rawat Jalan </p>
          <p className="text-2xl ">Pendaftaran Melalui Mobile JKN</p>
        </div>
        <div>
          <div className="flex">
            <img src={img[2]} alt="Mobile JKN" className="w-28 mt-5" />
            <img src={img[4]} alt="Mobile JKN" className="w-40 mt-5" />
          </div>
          <Link
            to="https://play.google.com/store/apps/details?id=app.bpjs.mobile&hl=id"
            className="bg-gradient-to-r  from-blue-500 via-blue-700 to-blue-900 text-slate-50 py-1 ml-3 rounded shadow-icon hover:bg-blue-700  mt-10 transition-all ease-in flex items-center justify-center gap-2 font-semibold text-[18px] w-65"
          >
            <FaCloudDownloadAlt /> Download Mobile JKN
          </Link>
        </div>
      </div>
      <div className="flex flex-col  items-end justify-center">
        <img src={img[5]} alt="Go-Obat" className="h-14 mb-1" />
        <p className="font-bold text-green-700 leading-5 ml-2">Kini Obat Bisa Diantar Kerumah</p>
        <p className="font-bold text-yellow-600 ml-2">Dengah Harga Lebih Terjangkau</p>
        <div className=" ml-2">
          <Link
            to="/go-obat"
            className="w-45 mt-5 hover:scale-[1.02] transition-all ease-in flex items-center justify-center gap-1 text-lg bg-gradient-to-r  from-emerald-500 via-emerald-700 to-emerald-900 text-white font-semibold  py-1 rounded-full mb-3"
          >
            <IoIosArrowDroprightCircle />
            Cara Pemesanan
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JknGoObat;
