import { Link } from "react-router-dom";
import { img } from "../../api/data";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { FaCloudDownloadAlt, FaUsers } from "react-icons/fa";
import { MdLibraryBooks } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";

const JknGoObat = () => {
  return (
    <div>
      {/* ================= QUICK MENU ================= */}
      <div className="py-6 px-4 sm:px-10 lg:px-60">
        <div className="grid grid-cols-1 sm:grid-cols-3 h-auto sm:h-40 rounded-2xl shadow-ku overflow-hidden">
          <Link to="/" className="flex flex-col items-center justify-center py-6 bg-green-700 group hover:bg-yellow-500 transition">
            <div className="bg-yellow-500 group-hover:bg-green-700 p-5 rounded-full">
              <FaUserDoctor className="text-4xl text-green-700 group-hover:text-yellow-500" />
            </div>
            <span className="font-semibold text-white text-lg mt-2">CARI DOKTER</span>
          </Link>

          <Link to="/" className="flex flex-col items-center justify-center py-6 bg-green-700 sm:border-x-2 border-yellow-500 group hover:bg-yellow-500 transition">
            <div className="bg-yellow-500 p-5 rounded-full group-hover:bg-green-700">
              <FaUsers className="text-4xl text-green-700 group-hover:text-yellow-500" />
            </div>
            <span className="font-semibold text-white text-lg mt-2">INFO ANTRIAN</span>
          </Link>

          <Link to="/" className="flex flex-col items-center justify-center py-6 bg-green-700 group hover:bg-yellow-500 transition">
            <div className="bg-yellow-500 p-5 rounded-full group-hover:bg-green-700">
              <MdLibraryBooks className="text-4xl text-green-700 group-hover:text-yellow-500" />
            </div>
            <span className="font-semibold text-white text-lg mt-2">PENDAFTARAN ONLINE</span>
          </Link>
        </div>
      </div>

      {/* ================= MOBILE JKN & GO OBAT ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-10 px-4 sm:px-10 lg:px-60">
        {/* MOBILE JKN */}
        <div className="flex flex-col items-start">
          <div className="font-semibold">
            <p className="text-lg">Pelayanan Rawat Jalan</p>
            <p className="text-2xl">Pendaftaran Melalui Mobile JKN</p>
          </div>

          <div className="flex gap-4 mt-5">
            <img src={img[2]} alt="Mobile JKN" className="w-24 sm:w-28" />
            <img src={img[4]} alt="Mobile JKN" className="w-32 sm:w-40" />
          </div>

          <Link
            to="https://play.google.com/store/apps/details?id=app.bpjs.mobile&hl=id"
            className="mt-6 bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 text-white py-2 px-5 rounded shadow-icon flex items-center gap-2 font-semibold text-base hover:scale-105 transition"
          >
            <FaCloudDownloadAlt />
            Download Mobile JKN
          </Link>
        </div>

        {/* GO OBAT */}
        <div className="flex flex-col items-start lg:items-end text-left lg:text-right justify-center">
          <img src={img[5]} alt="Go-Obat" className="h-12 mb-2" />

          <p className="font-bold text-green-700 leading-5">Kini Obat Bisa Diantar Kerumah</p>
          <p className="font-bold text-yellow-600 mb-4">Dengan Harga Lebih Terjangkau</p>

          <Link to="/go-obat" className="hover:scale-105 transition flex items-center gap-1 text-lg bg-gradient-to-r from-emerald-500 via-emerald-700 to-emerald-900 text-white font-semibold py-2 px-6 rounded-full">
            <IoIosArrowDroprightCircle />
            Cara Pemesanan
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JknGoObat;
