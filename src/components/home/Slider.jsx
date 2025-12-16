import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { MdLibraryBooks } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import { images, sliderImages } from "../../api/data";
import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa";

export default function ImageSlider() {
  return (
    <div className="bg-slate-100">
      <section>
        <div className="w-full px-0 lg:w-[80%] mx-auto ">
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/30">
              <h1 className="lg:text-3xl text-xl font-semibold mb-2">SELAMAT DATANG DI</h1>
              <h1 className="lg:text-5xl text-2xl font-bold mb-1">RS PKU MUHAMMADIYAH SRUWENG</h1>
              <h1 className="lg:text-2xl text-xl">"Semakin Unggul dan Islami"</h1>
            </div>
            <img src={images[0]} alt="Home" className="lg:h-120 h-80 w-full object-bottom" />
          </div>
          <div className="">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              loop
              spaceBetween={20}
              slidesPerView={3}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {sliderImages.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="overflow-hidden  shadow-lg">
                    <img src={img} alt={`slide-${i}`} className="h-[200px] w-full object-cover hover:scale-105 transition duration-500" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      <section className="lg:block hidden lg:w-[80%] mx-auto">
        <div className="grid grid-cols-3 lg:grid-cols-3 h-auto lg:h-40 lg:rounded-b-2xl overflow-hidden">
          <Link to="/dokter-kami" className="flex flex-col items-center justify-center py-3 bg-green-700 group hover:bg-green-900 transition">
            <div className="bg-white group-hover:bg-green-700 lg:p-5 p-4 rounded-full">
              <FaUserDoctor className="text-2xl lg:text-4xl text-green-800 group-hover:text-white" />
            </div>
            <span className="font-semibold text-white text-[12px] lg:text-lg mt-1">DOKTER </span>
            <span className="font-semibold text-white text-[12px] lg:text-lg">KAMI </span>
          </Link>

          <Link to="/" className="flex flex-col items-center justify-center py-3 bg-green-700 border-x-2 border-white group hover:bg-green-900 transition">
            <div className="bg-white lg:p-5 p-4 rounded-full group-hover:bg-green-700">
              <FaUsers className="text-2xl lg:text-4xl text-green-800 group-hover:text-white" />
            </div>
            <span className="font-semibold text-white text-[12px] lg:text-lg mt-1">INFO </span>
            <span className="font-semibold text-white text-[12px] lg:text-lg">ANTRIAN </span>
          </Link>

          <Link to="/" className="flex flex-col items-center justify-center py-3 bg-green-700 group hover:bg-green-900 transition">
            <div className="bg-white lg:p-5 p-4 rounded-full group-hover:bg-green-700">
              <MdLibraryBooks className="text-2xl lg:text-4xl text-green-800 group-hover:text-white" />
            </div>
            <span className="font-semibold text-white text-[12px] lg:text-lg mt-1">PENDAFTARAN </span>
            <span className="font-semibold text-white text-[12px] lg:text-lg"> ONLINE</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
