import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import axios from "axios";
import { formatTanggal } from "../../lib/helper";
const API = "https://brewokode.site/api/public-vidios/featured";

const VidioHome = () => {
  const [vidios, setVidios] = useState([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
    const fetchVidios = async () => {
      try {
        // ✅ Ambil hanya kategori promosi
        const res = await axios.get(`${API}?category=promosi`);

        setVidios(res.data.data);
      } catch (error) {
        console.log("Error Fetch Vidio:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVidios();
  }, []);
  return (
    <section data-aos="fade-up" className="bg-white/60 py-10 lg:px-5 px-2 lg:w-[80%] lg:mx-auto mx-2 rounded sm:rounded-lg shadow-ku my-5">
      <h1 className="font-bold text-center text-2xl sm:text-3xl text-emerald-900">Vidio Kami</h1>
      <div className="h-[3px] w-60 lg:w-80 mx-auto bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600 mb-8 sm:mb-10 mt-2"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Data Video */}
        {!loading &&
          vidios.slice(0, 6).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition duration-300"
            >
              {/* Video Embed */}
              <iframe
                src={item.link}
                title={item.judul}
                className="w-full h-[200px]"
                allowFullScreen
              ></iframe>

              {/* Content */}
              <div className="px-2">
                <h2 className="font-bold text-sm text-slate-900 line-clamp-2">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                  {formatTanggal(item.created_at)}
                </p>
              </div>
            </div>
          ))}
      </div>

      <div className="sm:mt-10 mt-5 flex justify-center">
        <Link
          to="/vidio-promosi"
          rel="noopener noreferrer"
          className="
             bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600
              text-white
              px-4 sm:px-8 py-2 sm:py-2 
              rounded
              font-semibold
              text-sm sm:text-lg
              shadow-ku
              hover:scale-105
              transition
            "
        >
          Lihat lainya
        </Link>
      </div>
    </section>
  );
};

export default VidioHome;
