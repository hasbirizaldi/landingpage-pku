import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { MdLibraryBooks } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import { images, sliderImages } from "../../api/data";
import { Link } from "react-router-dom";
import { useState } from "react";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="bg-transparent">
      {/* ===== HERO ===== */}
      <section data-aos="fade-up">
        <div className="w-full lg:w-[80%] mx-auto lg:pt-1 " >
          <div className="relative overflow-hidden lg:rounded-xl shadow-ku">
            {/* overlay text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/40 z-10">
              <h1 className="lg:text-3xl text-xl font-semibold mb-2" >SELAMAT DATANG DI</h1>
              <h1 className="lg:text-5xl text-2xl font-bold mb-1" >RS PKU MUHAMMADIYAH SRUWENG</h1>
              <h1 className="lg:text-2xl text-xl" >"Semakin Unggul dan Islami"</h1>
            </div>

            {/* BACKGROUND HERO */}
            <div className="h-80 lg:h-[480px] bg-cover bg-center" style={{ backgroundImage: `url(${images[0]})` }} />
          </div>

          {/* ===== SLIDER GAMBAR ===== */}
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop
            spaceBetween={20}
            slidesPerView={3}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="lg:my-3 my-1 "
          >
            {sliderImages.map((img, i) => (
              <SwiperSlide key={i}>
                <div onClick={() => setActiveIndex(i)} className="overflow-hidden lg:rounded-lg cursor-pointer">
                  <div className="h-[200px] bg-cover bg-center hover:scale-105 transition duration-500" style={{ backgroundImage: `url(${img})` }} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ===== MENU ICON ===== */}
      <section className="lg:w-[80%] mx-auto ">
        <div className="grid grid-cols-3 h-auto lg:h-40 lg:rounded-lg overflow-hidden">
          <Link to="/jadwal-dokter" className="flex flex-col py-2 items-center justify-center bg-gradient-to-r from-emerald-800 via-emerald-600 to-emerald-800 hover:bg-green-950 transition">
            <div className="bg-white p-2 lg:p-5 rounded-full">
              <FaUserDoctor className="text-2xl lg:text-4xl text-green-950" />
            </div>
            <span className="text-white lg:text-base text-sm font-semibold mt-2">Jadwal</span>
            <span className="text-white lg:text-base text-sm font-semibold">Poliklinik</span>
          </Link>

          <Link to="/dokter-kami" className="flex flex-col items-center justify-center bg-gradient-to-r from-emerald-800 via-emerald-600 to-emerald-800 border-x-2 border-white hover:bg-green-950 transition">
            <div className="bg-white p-2 lg:p-5 rounded-full">
              <FaUsers className="text-2xl lg:text-4xl text-green-950" />
            </div>
            <span className="text-white lg:text-base text-sm font-semibold mt-2">Dokter</span>
            <span className="text-white lg:text-base text-sm font-semibold">Kami</span>
          </Link>

          <Link to="/" className="flex flex-col items-center justify-center bg-gradient-to-r from-emerald-800 via-emerald-600 to-emerald-800 hover:bg-green-950 transition">
            <div className="bg-white p-2 lg:p-5 rounded-full">
              <MdLibraryBooks className="text-2xl lg:text-4xl text-green-950" />
            </div>
            <span className="text-white lg:text-base text-sm font-semibold mt-2">Belum</span>
            <span className="text-white lg:text-base text-sm font-semibold">Tau</span>
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
              className="absolute lg:top-5 top-40 right-5 z-[999] cursor-pointer text-white text-4xl hover:scale-110 transition"
            >
              <IoClose className="lg:text-5xl" />
            </button>

            {/* Arrow Kiri */}
            <button className="swiper-prev absolute left-4 lg:left-20 z-[999] text-white text-5xl lg:text-7xl">
              <RxDoubleArrowLeft />
            </button>

            {/* Arrow Kanan */}
            <button className="swiper-next absolute right-4 lg:right-20 z-[999] text-white text-5xl lg:text-7xl">
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
                    <img src={img} alt={`Preview ${i}`} className="max-w-[95%] max-h-[90%] rounded-lg shadow-lg cursor-pointer" draggable={false} />
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
