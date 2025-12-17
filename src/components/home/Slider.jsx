import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { MdLibraryBooks } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import { images, sliderImages } from "../../api/data";
import { Link } from "react-router-dom";

export default function Slider() {
  return (
    <div className="bg-transparent">
      {/* ===== HERO ===== */}
      <section>
        <div className="w-full lg:w-[80%] mx-auto lg:pt-1 ">
          <div className="relative overflow-hidden lg:rounded-xl shadow-ku">
            {/* overlay text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/40 z-10">
              <h1 className="lg:text-3xl text-xl font-semibold mb-2">SELAMAT DATANG DI</h1>
              <h1 className="lg:text-5xl text-2xl font-bold mb-1">RS PKU MUHAMMADIYAH SRUWENG</h1>
              <h1 className="lg:text-2xl text-xl">"Semakin Unggul dan Islami"</h1>
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
                <div className="overflow-hidden lg:rounded-lg">
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
          <Link to="/dokter-kami" className="flex flex-col py-2 items-center justify-center bg-green-800 hover:bg-green-950 transition">
            <div className="bg-white p-2 lg:p-5 rounded-full">
              <FaUserDoctor className="text-2xl lg:text-4xl text-green-950" />
            </div>
            <span className="text-white lg:text-base text-sm font-semibold mt-2">DOKTER</span>
            <span className="text-white lg:text-base text-sm font-semibold">KAMI</span>
          </Link>

          <Link to="/" className="flex flex-col items-center justify-center bg-green-800 border-x-2 border-white hover:bg-green-950 transition">
            <div className="bg-white p-2 lg:p-5 rounded-full">
              <FaUsers className="text-2xl lg:text-4xl text-green-950" />
            </div>
            <span className="text-white lg:text-base text-sm font-semibold mt-2">INFO</span>
            <span className="text-white lg:text-base text-sm font-semibold">ANTRIAN</span>
          </Link>

          <Link to="/" className="flex flex-col items-center justify-center bg-green-800 hover:bg-green-950 transition">
            <div className="bg-white p-2 lg:p-5 rounded-full">
              <MdLibraryBooks className="text-2xl lg:text-4xl text-green-950" />
            </div>
            <span className="text-white lg:text-base text-sm font-semibold mt-2">PENDAFTARAN</span>
            <span className="text-white lg:text-base text-sm font-semibold">ONLINE</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
