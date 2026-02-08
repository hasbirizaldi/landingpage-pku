import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { MdLibraryBooks } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import { images } from "../../api/data";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import axios from "axios";


export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [sliderImages, setSliderImages] = useState([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
    const fetchGallery = async () => {
      try {
        setLoading(true);

        const res = await axios.get(
          "https://brewokode.site/api/public-galleries"
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
    <div className="bg-transparent">
      {/* ===== HERO ===== */}
      <section data-aos="fade-up">
        <div className="w-full lg:w-[80%] mx-auto lg:pt-1 " >
          <div className="relative overflow-hidden lg:rounded-xl shadow-ku ">
            {/* overlay text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/40 z-10">
              <h1 className="lg:text-3xl text-xl font-semibold mb-2" >SELAMAT DATANG DI</h1>
              <h1 className="lg:text-5xl text-2xl font-bold mb-1" >RS PKU MUHAMMADIYAH SRUWENG</h1>
              <h1 className="lg:text-2xl text-xl text-yellow-400" >"Semakin Unggul dan Islami"</h1>
            </div>

            {/* BACKGROUND HERO */}
            <div className="relative h-80 lg:h-[400px]">

          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[0]})` }}
          />

          {/* Overlay Gelap */}
          <div className="absolute inset-0 bg-black/20" />

        </div>

          </div>

          {/* ===== SLIDER GAMBAR ===== */}
          <div className="relative my-2 mx-1">

            {/* ✅ LOADING SKELETON */}
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                        className="w-full h-[220px] object-cover sm:rounded-lg"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>

        </div>
      </section>

      {/* ===== MENU ICON ===== */}
      <section className="lg:w-[80%] mx-auto " data-aos="fade-up">
        <div className="grid grid-cols-3 h-28 lg:h-40  lg:rounded-lg overflow-hidden">
          <Link to="/jadwal-dokter" className="flex flex-col py-2 items-center justify-center bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600 hover:bg-emerald-800 transition">
            <div className="bg-white p-2 lg:p-5 rounded-full">
              <FaUserDoctor className="text-2xl lg:text-4xl text-yellow-600" />
            </div>
             <span className="text-white lg:text-base text-sm font-semibold mt-2">Jadwl Poliklinik</span>
           
          </Link>

          <Link to="/dokter-kami" className="flex flex-col items-center justify-center bg-emerald-600 border-x-2 border-white hover:bg-emerald-800 transition">
            <div className="bg-white p-2 lg:p-5 rounded-full">
              <FaUsers className="text-2xl lg:text-4xl text-yellow-600" />
            </div>
            <span className="text-white lg:text-base text-sm font-semibold mt-2">Dokter Kami</span>
           
          </Link>

          <Link to="/" className="flex flex-col items-center justify-center bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-900 hover:bg-emerald-800 transition">
            <div className="bg-white p-2 lg:p-5 rounded-full">
              <MdLibraryBooks className="text-2xl lg:text-4xl text-yellow-600" />
            </div>
             <span className="text-white lg:text-base text-sm font-semibold mt-2">Live Antrian</span>
           
          </Link>
        </div>
      </section>
      {/* ===== MODAL IMAGE (SWIPER SAFE CLOSE) ===== */}
      {activeIndex !== null && (
        <div className="fixed inset-0 z-50">
          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-black/80 z-40"
            onMouseDown={() => setActiveIndex(null)} // 🔥 FIX
          />

          {/* MODAL */}
          <div className="relative z-50 w-full h-full flex items-center justify-center">
            {/* CLOSE */}
            <button
              type="button"
              onMouseDown={() => setActiveIndex(null)} // 🔥 FIX
              className="absolute top-30 lg:top-0 right-0 lg:right-15 z-[999] cursor-pointer text-white hover:scale-110 transition"
            >
              <IoClose className="lg:text-5xl text-5xl" />
            </button>

            {/* Arrow Kiri */}
            <button className="swiper-prev absolute left-0 lg:left-32 z-[999] text-white cursor-pointer text-3xl lg:text-5xl">
              <RxDoubleArrowLeft />
            </button>

            {/* Arrow Kanan */}
            <button className="swiper-next absolute right-0 lg:right-32 z-[999] text-white cursor-pointer text-3xl lg:text-5xl">
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
                        lg:w-[900px]
                        lg:h-[600px]
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
}
