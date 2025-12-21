import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { dataVidio } from "../api/data";

const VidioKesehatan = () => {
  const [activeCategory, setActiveCategory] = useState("vidio-promosi");

  const tabs = [
    { label: "Vidio Promosi", value: "vidio-promosi" },
    { label: "Vidio Kesehatan", value: "vidio-kesehatan" },
    { label: "Vidio Keislaman", value: "vidio-keislaman" },
    { label: "Vidio SIMRS", value: "simrs" },
  ];

  useEffect(() => {
    document.title = "RS PKU Sruweng | Vidio & Tutorial";
  }, []);

  const filteredDataVidio = dataVidio.filter((item) => item.category === activeCategory).slice(0, 6);

  return (
    <div className="min-h-screen bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/5.jpg')" }}>
      <div className="bg-white/10 min-h-screen pb-8">
        <div className="pt-4">
          {/* HEADER */}
          <div className="lg:w-[80%] lg:mx-auto mx-2 text-slate-50 bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-500 lg:p-12 p-8 h-36 rounded-lg shadow-ku mb-6">
            <h1 className="lg:text-3xl text-2xl font-bold mb-1">Vidio & Tutorial</h1>
            <div className="flex items-center gap-1 text-slate-200">
              <span>Beranda</span>
              <IoIosArrowForward />
              <span>Vidio & Tutorial</span>
            </div>
          </div>

          {/* TAB */}
          <div className="grid grid-cols-4 lg:w-[80%] h-12 lg:mx-auto mx-2 overflow-hidden mb-6 bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-500 rounded-t-lg">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveCategory(tab.value)}
                className={`text-xs cursor-pointer lg:text-base font-semibold text-white flex items-center justify-center transition
                  ${activeCategory === tab.value ? "border-b-4 border-yellow-400 bg-black/30" : "hover:bg-black/20"}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* CONTENT */}
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 lg:w-[80%] mx-2 lg:mx-auto">
            {filteredDataVidio.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-ku overflow-hidden hover:shadow-xl transition">
                {/* VIDEO */}
                <div className="aspect-video">
                  <iframe src={item.videoUrl} title={item.title} className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>

                {/* TITLE */}
                <div className="p-2">
                  <h2 className="font-semibold text-slate-800 line-clamp-2">{item.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VidioKesehatan;
