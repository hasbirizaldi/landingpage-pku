import { Link } from "react-router-dom";
import { img } from "../../api/data";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { FaCloudDownloadAlt, FaUsers } from "react-icons/fa";

const JknHome = () => {
  return (
    <div className="bg-transparent" data-aos="fade-up">
      {/* ================= QUICK MENU ================= */}

      {/* ================= MOBILE JKN & GO OBAT ================= */}
      <section className=" py-8 lg:w-[80%] lg:mx-auto mx-2 bg-white/50 rounded-lg my-5 shadow-ku">
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-20 ">
          {/* MOBILE JKN */}
          <div className="flex flex-col items-center">
            <div className="font-semibold text-center">
              <p className="text-lg">Pelayanan Rawat Jalan</p>
              <p className="text-xl">Pendaftaran Online Melalui Mobile JKN</p>
            </div>

            <div className="flex gap-4 mt-5">
            
            <img
                src={img[2]}
                alt="Mobile JKN"
                className="w-24 sm:w-30 hover:scale-105 transition"
            />
           <div className="flex flex-col gap-2">
             <a
            href="https://apps.apple.com/id/app/mobile-jkn/id1237601115"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-block"
            >
                <img src={img[4]} alt="Mobile JKN" className="w-32 sm:w-40 hover:scale-105 transition" />
            </a>
             <a
            href="https://play.google.com/store/apps/details?id=app.bpjs.mobile&hl=id"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-block"
            >
                <img src={img[9]} alt="Mobile JKN" className="w-32 sm:w-40 hover:scale-105 transition" />
            </a>
           </div>

            </div>

           
          </div>

          {/* GO OBAT */}
          <div className="flex flex-col items-center justify-center">
            <img src={img[5]} alt="Go-Obat" className="h-12 mb-2" />

            <p className="font-bold text-green-700 leading-5">Kini Obat Bisa Diantar Kerumah</p>
            <p className="font-bold text-yellow-600 mb-4">Dengan Harga Lebih Terjangkau</p>

            <Link to="/go-obat" className="hover:scale-105 transition flex items-center gap-1 text-lg bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-600 text-white font-semibold lg:py-2 py-1 lg:px-5 px-5 rounded-full">
              <IoIosArrowDroprightCircle />
              Cara Pemesanan
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JknHome;
