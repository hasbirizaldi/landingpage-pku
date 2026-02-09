import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import {  FaWhatsappSquare } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import axios from "axios";

const LayananUnggulan = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [sliderImages, setSliderImages] = useState([]);
    const [loading, setLoading] = useState(true);
     useEffect(() => {
    const fetchGallery = async () => {
      try {
        setLoading(true);

        const res = await axios.get(
          "https://brewokode.site/api/public-sliders"
        );

        const images = res.data.data.data.map((item) => ({
          id: item.id,
          url: `https://brewokode.site/storage/${item.image}`,
        }));

        setSliderImages(images);
      } catch (error) {
        console.log("Error fetch gallery:", error);
      } finally {
        setLoading(false); // ✅ selesai loading
      }
    };

    fetchGallery();
  }, []);
  return (
    <div className="bg-transparent" >
      {/* ================= MOBILE JKN & GO OBAT ================= */}
      <section className=" py-10 lg:w-[80%] lg:mx-auto mx-2 bg-white/50 rounded-lg my-5 shadow-ku">
        <p className="font-bold text-center text-2xl sm:text-3xl text-green-900">Layanan Unggulan</p>
        <div className="h-[2px] w-60 lg:w-80 mx-auto bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600 mb-8 sm:mb-10 mt-2"></div>

        <div className="relative my-2 px-2">

            {/* ✅ LOADING SKELETON */}
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="w-full h-[220px] rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"
                  />
                ))}
              </div>
            ) : (
              <Swiper
                key={sliderImages.length}
                modules={[Navigation, Autoplay]}
                navigation={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                loop={sliderImages.length > 1}
                spaceBetween={20}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="w-full h-full"
              >
                {sliderImages.map((img, i) => (
                  <SwiperSlide key={img.id}>
                    <div
                      onClick={() => setActiveIndex(i)}
                      className="cursor-pointer"
                    >
                      <img
                        src={img.url}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>

          <Link
            to="https://wa.me/6287877505050?text=Assalamualaikum%20RS%20PKU%20Sruweng%2C%20saya%20ingin%20bertanya"
            target="_blank"
            className="bg-white cursor-pointer hover:scale-105 transition-all ease-in-out rounded-lg shadow-icon flex items-center justify-center gap-2 border border-emerald-700 sm:w-80 w-50 mx-auto mt-8"
          >
            <FaWhatsappSquare className="text-emerald-700 lg:text-5xl text-4xl" /><span className="text-sm sm:text-lg text-emerald-800 font-semibold">Hubungi Admin</span>
          </Link>
        
      </section>
      {/* ===== MODAL IMAGE (SWIPER SAFE CLOSE) ===== */}
      {activeIndex !== null && (
        <div className="fixed inset-0 z-[9999]">
          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-black/90 "
            onMouseDown={() => setActiveIndex(null)} // 🔥 FIX
          />

          {/* MODAL */}
          <div className="relative z-50 w-full h-full flex items-center justify-center">
            {/* CLOSE */}
            <button
              type="button"
              onMouseDown={() => setActiveIndex(null)} // 🔥 FIX
              className="absolute top-10 lg:top-0 right-0 lg:right-15 z-[999] cursor-pointer text-white hover:scale-110 transition"
            >
              <IoClose className="lg:text-5xl text-5xl" />
            </button>

            {/* Arrow Kiri */}
            <button className="swiper-prev absolute left-0 lg:left-20 z-[999] text-white cursor-pointer text-4xl lg:text-7xl">
              <RxDoubleArrowLeft />
            </button>

            {/* Arrow Kanan */}
            <button className="swiper-next absolute right-0 lg:right-20 z-[999] text-white cursor-pointer text-4xl lg:text-7xl">
              <RxDoubleArrowRight />
            </button>

            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: ".swiper-prev",
                nextEl: ".swiper-next",
              }}
              initialSlide={activeIndex}
              slidesPerView={1}
              loop
              className="w-full h-full"
            >
              {sliderImages.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={img.url}
                      alt={`Preview ${i}`}
                      className="
                        lg:w-[400px]
                        lg:h-[500px]
                        object-cover
                        rounded-lg
                        shadow-lg
                      "
                      draggable={false}
                    />
                  </div>
                </SwiperSlide>
              ))}

            </Swiper>
          </div>
        </div>
      )}
      
      
    </div>
  );
};

export default LayananUnggulan;
