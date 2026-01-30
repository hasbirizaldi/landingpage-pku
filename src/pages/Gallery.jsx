import { useEffect, useState } from "react";
import axios from "axios";
import { IoIosArrowForward } from "react-icons/io";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

const PROMOSI_API = "https://brewokode.site/api/public-promosis";
const GALLERY_API = "https://brewokode.site/api/public-galleries";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("gallery");
  const [loading, setLoading] = useState(true);

  // DATA PROMOSI
  const [promosi, setPromosi] = useState([]);
  const [promosiPage, setPromosiPage] = useState(1);
  const [promosiHasMore, setPromosiHasMore] = useState(true);

  // DATA GALLERY
  const [gallery, setGallery] = useState([]);
  const [galleryPage, setGalleryPage] = useState(1);
  const [galleryHasMore, setGalleryHasMore] = useState(true);

  // SLIDER
  const [showSlider, setShowSlider] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderData, setSliderData] = useState([]);

  // SWIPE
  const [startX, setStartX] = useState(null);
  const handleStart = (x) => setStartX(x);

  const handleEnd = (x) => {
    if (startX === null) return;
    const diff = startX - x;

    if (diff > 50)
      setCurrentIndex((prev) =>
        prev === sliderData.length - 1 ? 0 : prev + 1
      );
    else if (diff < -50)
      setCurrentIndex((prev) =>
        prev === 0 ? sliderData.length - 1 : prev - 1
      );

    setStartX(null);
  };

  // FETCH PROMOSI
  const fetchPromosi = async (page = 1) => {
    const res = await axios.get(`${PROMOSI_API}?page=${page}`);
    const newData = res.data.data.data;

    setPromosi((prev) => (page === 1 ? newData : [...prev, ...newData]));
    setPromosiHasMore(res.data.data.next_page_url !== null);
  };

  // FETCH GALLERY
  const fetchGallery = async (page = 1) => {
    const res = await axios.get(`${GALLERY_API}?page=${page}`);
    const newData = res.data.data.data;

    setGallery((prev) => (page === 1 ? newData : [...prev, ...newData]));
    setGalleryHasMore(res.data.data.next_page_url !== null);
  };

  useEffect(() => {
    document.title = "RS PKU Sruweng | Leaflet & Gallery";
    Promise.all([fetchPromosi(1), fetchGallery(1)]).finally(() =>
      setLoading(false)
    );
  }, []);

  const data =
    activeCategory === "promosi-leaflet" ? promosi : gallery;

  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/5.jpg')" }}
    >
      <div className="bg-white/10 min-h-screen pb-5">

        {/* HEADER */}
        <div className="pt-4 mb-8">
            <div className="lg:w-[80%] lg:mx-auto mx-2  bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600 lg:px-12 lg:py-10 p-8 rounded-lg shadow-ku text-white">
              <h1 className="lg:text-2xl text-xl font-bold mb-1">
                Gallery
              </h1>
              <div className="flex items-center gap-1 text-slate-200">
                <span>Beranda</span>
                <IoIosArrowForward />
                <span>Gallery</span>
              </div>
            </div>
          </div>

        {/* TAB */}
        <div className="grid grid-cols-2 lg:w-[80%] mx-2 lg:mx-auto h-12 mb-5 bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-500 rounded-t-lg overflow-hidden ">
          {[
            { label: "Promosi & Leaflet", value: "promosi-leaflet" },
            { label: "Gallery", value: "gallery" },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveCategory(tab.value)}
              className={`text-white font-semibold cursor-pointer ${
                activeCategory === tab.value
                  ? "bg-black/30 border-b-4 border-yellow-500"
                  : "hover:bg-black/20"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* LIST */}
        <div className="grid sm:grid-cols-3 grid-cols-2 gap-3 lg:w-[80%] mx-2 lg:mx-auto">
          {loading &&
            [...Array(6)].map((_, i) => (
              <div key={i} className="h-48 bg-slate-300 animate-pulse rounded" />
            ))}

          {!loading &&
            data.map((item, index) => (
              <div
                key={item.id}
                onClick={() => {
                  setSliderData(data);
                  setCurrentIndex(index);
                  setShowSlider(true);
                }}
                className="bg-white rounded shadow cursor-pointer hover:scale-[1.02]"
              >
                <img
                  src={`https://brewokode.site/storage/${item.image}`}
                  alt="img"
                  className="w-full object-cover"
                />
              </div>
            ))}
        </div>

        {/* LOAD MORE */}
        {!loading &&
          ((activeCategory === "promosi-leaflet" && promosiHasMore) ||
            (activeCategory === "gallery" && galleryHasMore)) && (
            <div className="flex justify-center mt-6">
              <button
                onClick={() => {
                  if (activeCategory === "promosi-leaflet") {
                    const next = promosiPage + 1;
                    setPromosiPage(next);
                    fetchPromosi(next);
                  } else {
                    const next = galleryPage + 1;
                    setGalleryPage(next);
                    fetchGallery(next);
                  }
                }}
                className="px-6 py-2 bg-emerald-600 text-white rounded cursor-pointer hover:bg-emerald-700"
              >
                Load More
              </button>
            </div>
          )}

        {/* SLIDER */}
        {showSlider && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
            <button
              onClick={() => setShowSlider(false)}
              className="absolute top-5 right-5 text-white text-3xl cursor-pointer"
            >
              ✕
            </button>

            <button
              onClick={() =>
                setCurrentIndex((p) =>
                  p === 0 ? sliderData.length - 1 : p - 1
                )
              }
              className="absolute left-5 text-white text-4xl cursor-pointer"
            >
              <MdOutlineKeyboardDoubleArrowLeft />
            </button>

            <div
              className="max-w-3xl w-full overflow-hidden"
              onTouchStart={(e) => handleStart(e.touches[0].clientX)}
              onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
              onMouseDown={(e) => handleStart(e.clientX)}
              onMouseUp={(e) => handleEnd(e.clientX)}
            >
              <div
                className="flex transition-transform duration-300"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {sliderData.map((item) => (
                  <div key={item.id} className="min-w-full flex justify-center">
                    <img
                      src={`https://brewokode.site/storage/${item.image}`}
                      className="max-h-[90vh] object-contain"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() =>
                setCurrentIndex((p) =>
                  p === sliderData.length - 1 ? 0 : p + 1
                )
              }
              className="absolute right-5 text-white text-4xl cursor-pointer"
            >
              <MdOutlineKeyboardDoubleArrowRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
