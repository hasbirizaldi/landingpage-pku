import { Link } from "react-router-dom";
import { img } from "../../api/data";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { FaCloudDownloadAlt, FaUsers } from "react-icons/fa";

const JknGoObat = () => {
  return (
    <div className="bg-transparent">
      {/* ================= QUICK MENU ================= */}

      {/* ================= MOBILE JKN & GO OBAT ================= */}
      <section className=" py-10 lg:w-[80%] lg:mx-auto mx-2 bg-white/50 rounded-lg my-5 shadow-ku">
        <p className="font-bold text-center text-2xl sm:text-3xl text-green-900">Layanan Unggulan</p>
        <div className="h-[2px] w-60 sm:w-60 lg:w-80 mx-auto bg-green-900 mb-8 sm:mb-10 mt-2"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-20 ">
          {/* MOBILE JKN */}
          <div className="flex flex-col items-center">
            <div className="font-semibold text-center">
              <p className="text-lg">Pelayanan Rawat Jalan</p>
              <p className="text-2xl">Pendaftaran Melalui Mobile JKN</p>
            </div>

            <div className="flex gap-4 mt-5">
              <img src={img[2]} alt="Mobile JKN" className="w-24 sm:w-28" />
              <img src={img[4]} alt="Mobile JKN" className="w-32 sm:w-40" />
            </div>

            <Link
              to="https://play.google.com/store/apps/details?id=app.bpjs.mobile&hl=id"
              className="mt-6 bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 text-white lg:py-2 py-1 lg:px-5 px-3 rounded shadow-icon flex items-center gap-2 font-semibold text-base hover:scale-105 transition"
            >
              <FaCloudDownloadAlt />
              Download Mobile JKN
            </Link>
          </div>

          {/* GO OBAT */}
          <div className="flex flex-col items-center justify-center">
            <img src={img[5]} alt="Go-Obat" className="h-12 mb-2" />

            <p className="font-bold text-green-700 leading-5">Kini Obat Bisa Diantar Kerumah</p>
            <p className="font-bold text-yellow-600 mb-4">Dengan Harga Lebih Terjangkau</p>

            <Link to="/go-obat" className="hover:scale-105 transition flex items-center gap-1 text-lg bg-gradient-to-r from-emerald-500 via-emerald-700 to-emerald-900 text-white font-semibold lg:py-2 py-1 lg:px-5 px-5 rounded-full">
              <IoIosArrowDroprightCircle />
              Cara Pemesanan
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JknGoObat;
